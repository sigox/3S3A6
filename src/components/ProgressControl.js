import { useState } from 'react';
import rightArrow from '../icons/right-arrow.svg'
import leftArrow from '../icons/left-arrow.svg'
export default function ProgressControl() {
    const [page, setPage] = useState(1);
    function minusClick(){
        if (page!==1){setPage(page - 1);};
    }
    function plusClick(){
        setPage(page + 1);
    }
    if (page===1){
        return(
            <section class="progress-control-container col col-lg-6 col-sm-12">
                <section class="button-group col col-12" data-phase="address">
                    <button class="next"  onClick={plusClick}>
                        下一步 
                        <img src={rightArrow} class="cursor-point" alt="" />
                    </button>
                </section>
            </section>
        )
    }else if (page===2){
        return(
            <section class="progress-control-container col col-lg-6 col-sm-12">
                <section class="button-group col col-12" data-phase="shipping">
                    <button class="prev" onClick={minusClick}>
                        <img src={leftArrow} class="cursor-point" alt="" />
                        上一步
                    </button>
                    <button class="next"  onClick={plusClick}>
                        下一步
                        <img src={rightArrow} class="cursor-point" alt="" />
                    </button>
                </section>
            </section>
        )
    }else
{    return(
        <section class="progress-control-container col col-lg-6 col-sm-12">
            <section class="button-group col col-12" data-phase="address">
                <button class="next"  onClick={plusClick}>
                    下一步 
                    <img src={rightArrow} class="cursor-point" alt="" />
                </button>
            </section>
            <section class="button-group col col-12" data-phase="shipping">
                <button class="prev" onClick={minusClick}>
                    <img src={leftArrow} class="cursor-point" alt="" />
                    上一步
                </button>
                <button class="next"  onClick={plusClick}>
                    下一步
                    <img src={rightArrow} class="cursor-point" alt="" />
                </button>
            </section>
            <section class="button-group col col-12" data-phase="credit-card">
                <button class="prev" onClick={minusClick}>
                    <img src={leftArrow} class="cursor-point" alt="" />
                    上一步
                </button>
                <button class="next">
                    確認下單
                </button>
            </section>
        </section>
    )}
}