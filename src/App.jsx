import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Header from './components/Header'
import AvailablePlayers from './components/AvailablePlayers';
import { toast } from 'react-toastify';
import Footer from './components/Footer';


function App() {

  const [freeCoinBtn, setFreeCoinBtn] = useState(0);

  const [addPlayer, setAddPlayer] = useState([]);



  const [isActive, setIsActive] = useState({
    available: true,
    status: 'available',
  })

  const handleIsActive = (status) => {

    if (status === 'available') {
      setIsActive({
        available: true,
        status: 'available',
      })
    }
    else {
      setIsActive({
        available: false,
        status: 'selected',
      })
    }

  }

  const handleAddMorePLayer = status => {
    if(status === 'selected'){
      setIsActive({
        available: true,
        status: 'morePlayer',
      })
    }
  }
  // console.log(isActive);

  const handleFreeCoin = coin => {
    const newCoinBtn = freeCoinBtn + coin;
    setFreeCoinBtn(newCoinBtn);
    toast.success('Credit Added to your Account', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  const handleAddPlayer = (player, freeCoinBtn, biddingPrice) => {

    if (addPlayer.length < 6) {

      if (freeCoinBtn === 0 || freeCoinBtn < biddingPrice) {
        setFreeCoinBtn(freeCoinBtn);
        toast.error('Sorry,Not enough money!', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      else if(freeCoinBtn >= biddingPrice) {
        const isExistPlayer = addPlayer.find(previousPlayer => previousPlayer.playerId === player.playerId)
        if (!isExistPlayer) {
          setFreeCoinBtn(freeCoinBtn - biddingPrice);
          const newSetAddPlayer = [...addPlayer, player];
          setAddPlayer(newSetAddPlayer);


          toast.success('congrats!You successfully add player', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

        }
        else {//if(isExistPlayer)


          toast.error('Player already selected!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      }

    } else {
      toast.error('Maximum 6 Players', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }



    // console.log(player)

  }

  const handleRemovePlayer = playerId => {
    console.log('remove', playerId);
    const remainingPlayer = addPlayer.filter(player => player.playerId !== playerId)
    setAddPlayer(remainingPlayer);
    toast.warn('Player Removed Successfully!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }


  return (
    <>
      <div>

        <div>
          {/* header section */}
          <Header
            freeCoinBtn={freeCoinBtn}
          ></Header>
        </div>

        <div className='md:mt-32'>
          {/* banner section */}
          <Banner
            handleFreeCoin={handleFreeCoin}
          ></Banner>
        </div>

        <div className='md:container md:mx-auto mt-20'>
          <AvailablePlayers
            handleIsActive={handleIsActive}
            isActive={isActive}
            handleAddPlayer={handleAddPlayer}
            addPlayer={addPlayer}
            handleRemovePlayer={handleRemovePlayer}
            freeCoinBtn={freeCoinBtn}
            handleAddMorePLayer={handleAddMorePLayer}
          ></AvailablePlayers>
        </div>

        <div>
          <Footer></Footer>
        </div>
      </div>
    </>
  )
}

export default App
