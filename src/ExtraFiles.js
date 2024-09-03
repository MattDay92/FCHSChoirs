    // <div className='row kidscamp d-flex justify-content-center align-items-center'>
    //     <div className='col-4 kidscamp-title2'>
    //       <h1>Kid's Camp 2023</h1>
    //     </div>
    //     <div className='col-4 kidscamp-info text-center'>
    //       <p className='text-white'>Every year, the Franklin Show Choirs host a Kindergarten through 6th grade Kid's Show Choir Camp as a fundraiser.
    //         Participating elementary students will then be invited to perform with the high schoolers at our fall concert on September 28th!</p>
    //       <div className='kidscamp-buttons'>
    //         <Button variant='contained' className='btn' href='https://docs.google.com/forms/d/e/1FAIpQLSeoWaaCk_Hl8ZZcILm4DUxF_9spR0Al7fn5I6cjcGpB-5_cZQ/viewform' target='_blank'>Register</Button>
    //         <Button variant='contained' className='btn' href='https://www.canva.com/design/DAFJrvY0YqM/1H2UsZqFyFEhRtuoZRPLEg/view?utm_content=DAFJrvY0YqM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink' target='_blank'>More Information</Button>
    //         <Link to={'/kidscamp'}><Button variant='contained' className='btn'>Pay Fee</Button></Link>
    //       </div>
    //     </div>
    //     <div className='col-4 kidscamp-title1'>
    //       <h1>Kid's Camp 2023</h1>
    //     </div>
    //   </div> 

      // <div className='row kidscamp d-flex justify-content-center align-items-center'>
      //   <div className='col-4 kidscamp-title2'>
      //     <h1>Trunk or Treat 2023</h1>
      //   </div>
      //   <div className='col-3 TrunkorTreatIMGDiv text-center'>
      //     <img className='TrunkorTreatIMG w-100' src={TrunkorTreat} />
      //   </div>
      //   <div className='col-4 kidscamp-title1'>
      //     <h1>Trunk or Treat 2023</h1>
      //   </div>
      // </div>

      // <div className='row kidscamp d-flex justify-content-center align-items-center'>
        
      //   <div className='col-4 TrunkorTreatIMGDiv text-center'>
      //     <a className='poster-ticket-click' href='https://thefranklinpac.ludus.com/index.php' target='_blank'><img className='TrunkorTreatIMG w-75' alt='FCHS Choirs Winter Concert Poster' src={WinterConcert} /></a>
      //   </div>
      //   <div className='col-4 kidscamp-title1'>
      //     <h2>Winter Concert 2023</h2>
      //     <a href='https://thefranklinpac.ludus.com/index.php' target='_blank' className='btn m-auto'>Tickets</a>
      //   </div>
      // </div>

      // import Showfest from '../components/photos/ShowFestLogo.webp'
      // import ShowFestMenu from '../components/files/ShowFestMenu.pdf'




      // <div className='row showfest d-flex justify-content-center align-items-center'>
      //   <div className='col-4 showfest-img'>
      //     <img className='showfest-logo' alt='ShowFest Logo' src={Showfest} />
      //   </div>
      //   <div className='col-4 showfest-info text-center'>
      //     <h3 className='text-white'>Saturday, January 27th</h3>
      //     <p>Franklin Community ShowFest is fast approaching!  Click the buttons below for spectator information including directions and admission prices, the day's schedule,
      //       and the food menu for the day.
      //     </p>
      //     <div className='showfest-btns'>
      //       <Button variant='contained' className='btn my-2' href='https://docs.google.com/spreadsheets/d/1mYk6Px4RNElIDvSwGI5fMflPgPQ5ssYsV3FOg-wvW2I/edit#gid=1795939512' target='_blank'>Schedule</Button>
      //       <Button variant='contained' className='btn my-2' href={ShowFestMenu} download="ShowFestMenu.pdf">Food Menu</Button>
      //       <Button variant='contained' className='btn my-2' href='https://docs.google.com/document/d/1PYTPwlgSW1Vc0UdQ5pcuM9rYZgF15k41QaWrBBDw_gQ/edit' target='_blank'>Spectator Information</Button>
      //     </div>
      //   </div>
      // </div>



      {showPopUp === true ? <>
        <div id='popup'>
          <div className='row concert-ad'>
            <button className='popup-close-btn' onClick={closeAd}><i class="fa-solid fa-x"></i></button>
            <div className='col-4 popup-img'>
              <img className='popup-logo' alt='Spring Concert Poster' src={popupIMG} />
            </div>
            <div className='col-4 popup-info text-center'>
              <h3 className='text-white'>Spring Concert 2024</h3>
              <p>Come see the students of Franklin Community High School Choirs perform their jazz-filled Spring Concert on Thursday, May 9th, 2024. Tickets available now!
              </p>
              <div className='popup-btns'>
                <Button variant='contained' className='btn my-2' href='https://thefranklinpac.ludus.com/200453672' target='_blank'>Buy Tickets</Button>
              </div>
            </div>
          </div>
        </div>
      </>
        :
        <></>
      }


      // <div className='row kidscamp d-flex justify-content-center align-items-center'>
      //   <div className='col-5 kidscamp-title2'>
      //     <h1>Summer Vocal Arts Camp 2024</h1>
      //   </div>
      //   <div className='col-4 kidscamp-info text-center'>
      //     <p className='text-white'>The Franklin Community Summer Choral and Vocal
      //       Music Camp is a new and exciting summer opportunity
      //       for students who like to sing!
      //       The camp will be a wonderful week of memorable
      //       music-making and fun! Music-loving kids will learn,
      //       laugh, and sing together in a vigorous, fast-paced, and
      //       exciting positive environment.</p>
      //     <div className='kidscamp-buttons'>
      //       <Button variant='contained' className='btn' href='https://forms.gle/ndubC65Vo6infKT5A' target='_blank'>Register</Button>
      //       <Button variant='contained' className='btn' href='https://www.canva.com/design/DAFUwMEwb1A/aLlDbD1RbcD70-ZBFtt17Q/view?utm_content=DAFUwMEwb1A&utm_campaign=designshare&utm_medium=link&utm_source=editor' target='_blank'>More Info</Button>
      //       <Button variant='contained' className='btn' href='https://collectcheckout.com/r/z1onc' target='_blank'>Pay Fee</Button>
      //     </div>
      //   </div>
      //   <div className='col-5 kidscamp-title1'>
      //     <h1>Summer Vocal Arts Camp 2024</h1>
      //   </div>
      // </div>



      {/* <div className='container featured col-8'>
        <h2 className='text-center text-white my-5'>All State Choir 2024</h2>
        <div className='carousel d-flex justify-content-center'>
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={Featured1} loading='lazy' alt='All State Choir Performance' className="d-block w-100" />
              </div>
              <div className="carousel-item">
                <img src={Featured2} alt='Franklin Students at All State Choir 2024' fetchpriority="low" className="d-block w-100" />
              </div>
              <div className="carousel-item">
                <img src={Arch} alt='Franklin choirs at St Louis Arch' fetchpriority="low" className="d-block w-100" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <p className='text-center text-white mt-3'>We were beyond proud to be represented by seventeen amazing students at the
          2024 Indiana All State Choir performance on January 13th!  These kids were admitted to this choir through a rigorous
          audition process, and got to sing collegiate level music with the best singers from across the state.  Congratulations
          to these amazing students!</p>
      </div> */}