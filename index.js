const projects = document.querySelectorAll(".wrapper");
const btnResume = document.querySelector('.btnResume');

btnResume.addEventListener('click', openResume)

function openResume() {
    window.open('Daria_Khlistun_Resume.pdf', '_blank');
}

projects.forEach(link => {
    link.addEventListener('mouseover', () => {

        link.classList.add('selected');
        Array.from(link.children).forEach(el => {

            if (el.classList.contains('backdrop')) {
                el.classList.add('hidden')
            }
        })

        projects.forEach(link => {
            link.addEventListener('mouseleave', () => {

                link.classList.remove('selected');
                Array.from(link.children).forEach(el => {

                    if (el.classList.contains('backdrop')) {
                        el.classList.remove('hidden')
                    }
                })
            })
        })
    })
})
