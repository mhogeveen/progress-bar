document.addEventListener('DOMContentLoaded', () => {
   const progressBar = document.querySelector('.progress')

   let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
   let scrollBottom =
      (document.documentElement.scrollHeight || document.body.scrollHeight) -
      document.documentElement.clientHeight

   let progress = scrollTop / scrollBottom

   progressBar.style.setProperty('--progress', `${progress}`)

   document.addEventListener('scroll', () => {
      scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      scrollBottom =
         (document.documentElement.scrollHeight || document.body.scrollHeight) -
         document.documentElement.clientHeight

      progress = scrollTop / scrollBottom

      progressBar.style.setProperty('--progress', `${progress}`)
   })
})
