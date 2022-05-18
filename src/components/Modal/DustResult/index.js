// Dependencies
import { BsPeopleFill } from "react-icons/bs";
import { CgSandClock } from "react-icons/cg";

// React-Redux
import Button from '@/components/Button';

// Styles
import "./dustresult.scss"

// Locals
import dust from '@/assets/images/dust.png';
import sparklingleft from '@/assets/images/sparkling-left.png';
import sparklingright from '@/assets/images/sparkling-right.png';

function DustResult() {
    const gameImage = "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1629324760985.jpg"

    return (
        <div className="dustresult">
            <div className="dustresult__game">
                <img className="dustresult__dust" src={dust} alt="dust" />
                <div className="dustresult__circle">
                    <img className="dustresult__circle__picture" src={`https://res.cloudinary.com/dyg/image/fetch/c_scale,h_200,q_80,w_200/${gameImage}`} alt="game" />
                    <img className="dustresult__sparkling dustresult__sparkling--left" src={sparklingleft} alt="sparklingleft" />
                    <img className="dustresult__sparkling dustresult__sparkling--right" src={sparklingright} alt="sparklingright" />
                </div>
            </div>
            <div className="dustresult__information">
                <h2 className="dustresult__title">Nom du jeu</h2>
                <div className="dustresult__statistics">
                    <div className="dustresult__statistics__people">
                        <BsPeopleFill className="dustresult__statistics__icon--people" />
                        <div className="dustresult__statistics__people__number">
                            4
                        </div>
                    </div>
                    <div className="dustresult__statistics__time">
                        <CgSandClock className="dustresult__statistics__icon--time" />
                        <div className="dustresult__statistics__time__number">
                            ±45
                        </div>
                    </div>
                </div>
                <div className="dustresult__buttons">
                    <Button
                        name="relancer"
                        classname="secondary"
                        type="button"
                        style={{ width: '40%', marginTop: '1em', fontSize: '0.8em' }}
                    />
                    <Button
                        name="choisir"
                        classname="primary"
                        type="button"
                        style={{ width: '40%', marginTop: '1em', fontSize: '0.8em' }}
                    />
                </div>
            </div>
        </div>
    );
}

export default DustResult;
