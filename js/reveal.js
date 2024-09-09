
window.revelar = ScrollReveal({reset:true})

// ---- Topo Site ----

revelar.reveal ('.efeito-txt-topo' , 
{
    reset:false,
    duration: 1000, 
    distance: '90px'
})
revelar.reveal ('.efeito-txt-topo2' , 
    {
        reset:false,
        duration: 1000, 
        distance: '90px',
        delay: 1000
    })

// ---- Section2 ----
revelar.reveal ('.efeito-txt-section2' , 
    {
        reset:false,
        origin: 'left',
        duration: 1000, 
        distance: '90px'
    })
    revelar.reveal ('.efeito-img-section2' , 
        {
            reset:false,
            origin: 'right',
            duration: 2000, 
            distance: '190px'
            
        }) 

        revelar.reveal ('.efeito-txt-section3' , 
            {
                reset:false,
                origin: 'right',
                duration: 1000, 
                distance: '90px'
            }) 