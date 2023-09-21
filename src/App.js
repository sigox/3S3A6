import { useState } from 'react';
import './App.css';
import StepProgess from './components/StepProgess';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Cart from './components/cart';
import ProgressControl from './components/ProgressControl';

export default function App() {
  const[page,setPage]=useState(1)
    function nextClick(){
        setPage(page+1)
    }
    function prevClick(){
        setPage(page-1)
    }
  return (
    <main className="site-main">
      <div className="main-container">
        <section className="register-container col col-lg-6 col-sm-12" data-phase={page} data-total-price="0">
          <h2 className="register-title col col-12">結帳</h2>
          <StepProgess />
          <section className="form-container col col-12">
            <Step1 />
            <Step2 />
            <Step3 />
          </section>
        </section>
        <Cart />
        <ProgressControl nextClick={nextClick} prevClick={prevClick}/>
      </div>
    </main>
  );
}