
window.revelar = ScrollReveal({reset:true})

// ---- Topo Site ----

revelar.reveal ('.efeito-txt-topo' , 
{
    reset:false,
    duration: 2000, 
    distance: '90px'
})
revelar.reveal ('.efeito-txt-topo2' , 
    {
        reset:false,
        duration: 2000, 
        distance: '90px',
        delay: 1000
    })

// ---- Section2 ----
revelar.reveal ('.efeito-txt-section2' , 
    {
        reset:false,
        origin: 'left',
        duration: 2000, 
        distance: '90px'
    })
    revelar.reveal ('.efeito-img-section2' , 
        {
            reset:false,
            origin: 'right',
            duration: 4000, 
            distance: '190px',
            delay: 1000
        }) 

        revelar.reveal ('.efeito-txt-section3' , 
            {
                reset:false,
                origin: 'right',
                duration: 2000, 
                distance: '90px'
            }) 