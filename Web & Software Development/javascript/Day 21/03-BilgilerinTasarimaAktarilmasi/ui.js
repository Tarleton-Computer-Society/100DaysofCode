class UI {
    constructor(){
        this.profileContainer = document.querySelector("#profileContainer");
        this.alert = document.querySelector("#alert");
    }

    // fonksiyon tanımlayalım 
    showProfile(profile){
        this.profileContainer.innerHTML=`

            <div class="card card-body">
                <div class="row"> 
                    <div class="col-md-3">
                        <a href="placeholder.com"> <img class="img-thumbnail" src ="https://via.placeholder.com/150"></a>
                    </div>
                    <div class="col-md-9">
                        <h4> Contact </h4>
                        <ul class="list-group">
                            <li class="list-group-item">
                                name: ${profile.name}
                            </li>
                            <li class="list-group-item">
                               username: ${profile.username}
                            </li>
                            <li class="list-group-item">
                                email: ${profile.email}
                            </li>
                            <li class="list-group-item">
                                address:
                                    ${profile.address.city}
                                    ${profile.address.zipcode}
                                    ${profile.address.street}
                                    ${profile.address.suite}
                            </li>
                            <li class="list-group-item">
                                phone: ${profile.phone}
                            </li>
                            <li class="list-group-item">
                                website: ${profile.website}
                            </li>
                            <li class="list-group-item">
                                company: ${profile.company.name}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        `;
    }

    showAlert(text){
        this.alert.innerHTML=`
            ${text} is not found!
        `;
    }

    clear(){ //app.js kısmına eklediğimiz işlem ile önceki işlemler temizler
        this.profileContainer.innerHTML="";
        this.alert.innerHTML="";
    }
}