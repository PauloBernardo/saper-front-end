import React, {useContext} from "react";
import {AuthContext} from "../../store/authContext";
import {useTranslation} from "react-i18next";

function Profile() {
    const {t} = useTranslation();
    const auth = useContext(AuthContext);

    return (
        <div className="container mt-5">

            <div className="row d-flex justify-content-center">

                <div className="col-md-7">

                    <div className="card p-3 py-4">

                        <div className="text-center">
                            <img src={process.env.REACT_APP_BACK_HOST + '/files/' + auth.user?.profileImage.id} width="100" className="rounded-circle" alt={'profileImg'} />
                        </div>

                        <div className="text-center mt-3">
                            <span className="bg-secondary p-1 px-4 rounded text-white">{t('pages.profile.' + (auth.user?.roles[0].authority))}</span>
                            <h5 className="mt-2 mb-0">{auth.user?.name}</h5>
                            <span>{auth.user?.login}</span>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}


export default Profile;