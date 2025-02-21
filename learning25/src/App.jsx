import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Header} from './components/Header'
import Footer3 from './components/Footer3'
import { Content } from './components/Content'
import { Navbar } from './components/Navbar'
import { ArrayDemo1 } from './components/ArrayDemo1'
import { ArrayDemo2 } from './components/ArrayDemo2'
import { ArrayDemo3}from './components/ArrayDemo3'
import { ArrayDemo4 } from './components/ArrayDemo4'
import { UsestateDemo1 } from './components/UsestateDemo1'
import { UseStateDemo2 } from './components/UseStateDemo2'
import { InputDemo1 } from './components/InputDemo1'
import { Hcomponent } from './components/Hcomponent'
import { Hcomponent2 } from './components/Hcomponent2'
import { Navbar1 } from './components/Navbar1'
import { Route, Routes } from 'react-router-dom'
import { HotstarHome } from './components/hotstar/HotstarHome'
import { HotstarMovie } from './components/hotstar/HotstarMovie'
import { HotstarWelcome } from './components/hotstar/HotstarWelcome'
import { Error404 } from './components/hotstar/Error404'
import { HotstarPlay } from './components/hotstar/HotstarPlay'
import { FormDemo1 } from './components/form/FormDemo1'
import { FormDemo2 } from './components/form/FormDemo2'
import { FormDemo3 } from './components/form/FormDemo3'
import { FormDemo4 } from './components/form/FormDemo4'
import { FormHome1 } from './components/form/FormHome1'
import { FormHome2 } from './components/form/FormHome2'
import { FormHome3 } from './components/form/FormHome3'
import { FormDemo5 } from './components/form/FormDemo5'
import { FormDemo6 } from './components/form/FormDemo6'
import { FormDemo7 } from './components/form/FormDemo7'
import { FormDemo8 } from './components/form/FormDemo8'
import { ApiDemo1 } from './components/apis/ApiDemo1'
import { SearchMovie } from './components/apis/omdb/SearchMovie'
import { MovieDetail} from'./components/apis/omdb/MovieDetail'
import { UserList } from './components/apis/UserList'
import { PostApiDemo1 } from './components/apis/PostApiDemo1 '
import { PostApiDemo2 } from './components/apis/PostApiDemo2'
import { UseEffectDemo } from './components/UseEffectDemo'
function App() {
  

  return (
    <div>
      {/*<Header></Header>
      <Content></Content>
      <Footer3></Footer3>*/}
      {/*<Navbar></Navbar>*/}
      {/*<ArrayDemo1></ArrayDemo1>*/}
      {/*<ArrayDemo2></ArrayDemo2>*/}
      {/*<ArrayDemo3></ArrayDemo3>*/}
      {/*<ArrayDemo4></ArrayDemo4>*/}
      {/* <UsestateDemo1></UsestateDemo1> */}
      {/* <UseStateDemo2></UseStateDemo2> */}
      {/* <InputDemo1></InputDemo1> */}
      {/* <Hcomponent></Hcomponent>
      <Hcomponent2></Hcomponent2>
       */}


       <Navbar1></Navbar1>

       <Routes>
        <Route path='/home' element={<HotstarHome/>}></Route>
        <Route path='/movie' element={<HotstarMovie/>}></Route>
        <Route path='/' element={<HotstarWelcome/>}></Route>
        <Route path='/*' element={<Error404/>}></Route>
        <Route path='/play/:id' element={<HotstarPlay/>}></Route>
        <Route path='/formdemo1'element={<FormDemo1/>}></Route>
        <Route path='/formdemo2'element={<FormDemo2/>}></Route>
        <Route path='/formdemo3'element={<FormDemo3/>}></Route>
        <Route path='/formdemo4'element={<FormDemo4/>}></Route>
        <Route path='/formhome1'element={<FormHome1/>}></Route>
        <Route path='/formhome2'element={<FormHome2/>}></Route>
        <Route path='/formhome3'element={<FormHome3/>}></Route>
        <Route path='/formDemo5'element={<FormDemo5/>}></Route>
        <Route path='/formDemo6'element={<FormDemo6/>}></Route>
        <Route path='/formdemo7'element={<FormDemo7/>}></Route>
        <Route path='/formdemo8'element={<FormDemo8/>}></Route>
        <Route path='/apidemo1'element={<ApiDemo1/>}></Route>
        <Route path='/searchmovie'element={<SearchMovie/>}></Route>
        <Route path='moviedetail/:id'element={<MovieDetail/>}></Route>
        <Route path='/userlist'element={<UserList/>}></Route>
        <Route path='postapidemo1'element={<PostApiDemo1/>}></Route>
        <Route path='postapidemo2'element={<PostApiDemo2/>}></Route>
        <Route path='useeffectdemo'element={<UseEffectDemo/>}></Route>
       </Routes>
    </div>
    
  )
}


export default App
