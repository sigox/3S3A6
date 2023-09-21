import rightArrow from '../icons/right-arrow.svg'
import leftArrow from '../icons/left-arrow.svg'
export default function ProgressControl({nextClick,prevClick}) {
    
    return(
        <section className="progress-control-container col col-lg-6 col-sm-12">
            <section className="button-group col col-12" data-phase="address">
                <button className="next" onClick={nextClick}>
                    下一步 
                    <img src={rightArrow} className="cursor-point" alt="" />
                </button>
            </section>
            <section className="button-group col col-12" data-phase="shipping">
                <button className="prev" onClick={prevClick}>
                    <img src={leftArrow} className="cursor-point" alt="" />
                    上一步
                </button>
                <button className="next" onClick={nextClick}>
                    下一步
                    <img src={rightArrow} className="cursor-point" alt="" />
                </button>
            </section>
            <section className="button-group col col-12" data-phase="credit-card">
                <button className="prev" onClick={prevClick}>
                    <img src={leftArrow} className="cursor-point" alt="" />
                    上一步
                </button>
                <button className="next">
                    確認下單
                </button>
            </section>
        </section>
    )
}