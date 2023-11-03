
import { FC, useState } from 'react';
import { classNames } from 'helpers/classNames/classNames';
import Shevron from "shared/assets/icons/ShevronBlack.svg"
import cls from './Sidebar.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const {className, children} = props;
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(expanded => !expanded);
  
  return (
    <div className={classNames(cls.Sidebar, {[cls.expanded]: expanded }, [className])}>
      <div className={cls.SidebarTop}>
        <Button
          onClick={toggleExpanded}
          theme={ThemeButton.WIDE} 
          className={classNames('', {[cls.rotate]: !expanded })}
        >
          <Shevron/>
        </Button>
      </div>
      { children }
    </div>
    )
}