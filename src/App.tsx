import './main.scss'
import RouteSetup from '@routes/RouteSetup'
import './i18n/config';
import { useSelector,useDispatch } from 'react-redux';
import { StoreType } from './stores';
import api from "@services/api"
import { useEffect } from 'react';
import { userAction } from './stores/slices/user.slice';
function App() {
  const dispatch=useDispatch();
  const store=useSelector(store=>store ) as StoreType
  console.log("store",store.userStore);
  
  useEffect(()=>{
    if(localStorage.getItem("token")){
      api.userApi.authentication()
      .then(res=>{
        if(res.status==200){
          dispatch(userAction.setLoginData(res.data.data))
        }else{
          localStorage.removeItem("token")
        }
      })
    }
  },[])
  return (
    <>
      {/* Routing */}
      <RouteSetup/>
    </>
  )
}

export default App
