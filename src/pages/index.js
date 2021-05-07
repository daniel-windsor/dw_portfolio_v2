import * as React from "react"
import firebase from 'firebase/app'

import Layout from "../components/layout"
import Seo from "../components/seo"
import Splash from "../components/splash"
import About from "../components/about"
import Portfolio from "../components/portfolio"
import Contact from "../components/contact"

const firebaseConfig = {
  apiKey: "AIzaSyC95gm4P54VpevCvLwepQKamF_BliuCAqc",
  authDomain: "dw-portfolio-e264d.firebaseapp.com",
  databaseURL: "https://dw-portfolio-e264d.firebaseio.com",
  projectId: "dw-portfolio-e264d",
  storageBucket: "dw-portfolio-e264d.appspot.com",
  messagingSenderId: "287471345957",
  appId: "1:287471345957:web:cbc6dda82d6422f37f7acc",
  measurementId: "G-MWPT1522T9"
};

firebase.initializeApp(firebaseConfig)

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Dan Windsor"/>
      <Splash />
      <About />
      <Portfolio />
      <Contact />
    </Layout>
  )
}

export default IndexPage
