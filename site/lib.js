window.Repro = {
  init: () => {
    const test = document.querySelector('#test')
    const mql = window.matchMedia('(min-width: 48.0625em)');
    const handleChange = () => {
      // Uncomment this and the test passes
      // console.log(window.innerWidth)

      if (mql.matches) {
        console.log('matches')
        test.classList.remove('blue')
        test.classList.add('red')
      } else {
        console.log('does not match')
        test.classList.remove('red')
        test.classList.add('blue')
      }
    }
    mql.addEventListener('change', handleChange);
    handleChange()
  }
}
