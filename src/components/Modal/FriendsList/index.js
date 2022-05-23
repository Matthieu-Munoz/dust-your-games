// Styles
import "./friendslist.scss"
import friendslist from "@/assets/images/friendslist.png";


function FriendsList() {

    return (
        <div className="friendslist">
                    <div className="friendslist__ctn">
                        <h2 className="friendslist_ctn_title"> Votre liste d'amis </h2>
                        <img
                            className="friendslist__ctn__img"  
                            src={`https://res.cloudinary.com/dyg/image/upload/c_scale,h_300,w_250,q_80/friendslist_nygicd.png`}
                            alt={'friendslist'}
                        />
                    </div>
                    <div className='friendslist__text'>
                        C’est ici que vous pourrez accéder
                        à votre liste d’amis.
                        Connectez-vous à votre entourage
                        et accédez à leurs jeux à tout moment !
                    </div>
        </div>
    );
}

export default FriendsList;
