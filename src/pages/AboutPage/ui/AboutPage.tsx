import classes from './AboutPage.module.scss'
type Props = {}

export default function AboutPage({}: Props) {
  return (
    <div>
      <h1>AboutPage</h1>
      <div className={classes.content}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores nemo earum commodi architecto quas veniam placeat tempora quidem deleniti cumque ducimus, aperiam cum dicta molestiae voluptate, error pariatur ex recusandae? Laborum corporis quos numquam doloremque. Quidem, labore fuga? Eum, minus!
      </div>
    </div>
    
  )
}