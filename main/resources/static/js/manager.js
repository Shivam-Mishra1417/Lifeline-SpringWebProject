
document.addEventListener("DOMContentLoaded", function(event){
    var doctorsList = document.querySelector('.view-doctors');
    var counselorList = document.querySelector(".view-counselor");
    var viewPatient = document.querySelector(".view-patient");
    var generateReport = document.querySelector(".generate-report");
    var allTables = document.querySelectorAll(".list-table");
    var skeletonContainer = document.querySelector(".skeleton-container")
    var doctorsTable =  document.querySelector('.doctor-list-table');
    var patientsTable =  document.querySelector('.Patient-list-table');
    var counsellorTable =  document.querySelector('.Counsellor-list-table');
    var rejectDoctor = document.querySelector(".d-reject");
    var acceptDoctor = document.querySelector(".d-accept");
    var addPatient = document.querySelector('.add-patient');
    var patientRegisterForm = document.querySelector("#patientRegisterForm .register-button");

generateReport.addEventListener('click', function(event) {
		window.open("http://localhost:9999/manager/report", '_blank');
	});
    // const getDoctorsList =  function() {
    //     fetch("", {
    //       method: "GET",
    //     }).then(async (resp) => {
    //       const jsonResult = await resp.json();
    //       console.log(jsonResult);
          
    //     });
    // }
    var jsonResult = {
        waitlistedDoctors : [
          {name: "A", id: 1,email:"13"},
          {name: "A", id: 1,email:"13"},
          {name: "A", id: 1,email:"13"},
          {name: "A", id: 1,email:"13"}
        ],
        activeDoctors : [
            {name: "A", id: 1,email:"13"},
            {name: "A", id: 1,email:"13"},
          {name: "B", id: 4,email:"13ere"}
        ],
      };
      var counselorsResult = {
        waitlistedcounselors : [
          {name: "CCC", id: 32356781},
          {name: "SWW", id: 22345678765},
          {name: "Gwwwww", id: 544643},
          {name: "Bwww", id: 334446644}
        ],
        activecounselorr : [
          {name: "A2df3", id: 1447789},
          {name: "S32f23rf", id: 248446},
          {name: "Gff3f3f3", id: 34848},
          {name: "Bf3f3f3f", id: 45796}
        ],
      };
    // View Doctoes Click event
    doctorsList.addEventListener('click', function(event){

       
        for (let index = 0; index < allTables.length; index++) {
            var element = allTables[index];
            element.classList.add("display-none");              
        }
        skeletonContainer.classList.remove("display-none");
            setTimeout(function(){
                skeletonContainer.classList.add("display-none");
                $(".doctor-list-table").find(".doctor-list-table").innerHTML = "";              
                doctorsTable.querySelector("tbody").innerHTML = "";
                $(".doctor-list-table").find(".empty-message").text("")
                count = 1 ;
                
                // For WaitListed Doctors
                
                fetch("http://localhost:9999/manager/getdoctorslist", {
                method: 'GET',
                })
                .then((response) => response.json())
                .then((resp) => {
                var waitlistedDoctors = resp.waitlistedDoctors;
                var activeDoctors = resp.activeDoctors;
                if(resp.status == "Success"){
                    $(".doctors-main-div").removeClass("display-none");

                    // For WaitListed Doctors 
                    if(waitlistedDoctors){                       
                        for (let index = 0; index < waitlistedDoctors.length; index++) {
                            const data = waitlistedDoctors[index];
                            var doc_table_row = document.querySelector(".doctor-row.display-none");
                            var elem = doc_table_row.cloneNode(true);
                            elem.querySelector(".d-name").innerText = data.name;
                            elem.querySelector(".d-id").innerText = data.id;
                            elem.querySelector(".d-email").innerText = data.email;
                            elem.classList.remove("display-none");
                            doctorsTable.querySelector("tbody").append(elem);
                            elem.querySelector(".d-accept-reject .btn-primary").remove();
                            elem.querySelector(".d-accept-reject .btn-success").setAttribute("id",data.id);
                            elem.querySelector(".d-accept-reject .btn-danger").setAttribute("id",data.id);
                            elem.querySelector(".d-accept-reject .btn-success").setAttribute("email-id",data.email);
                            elem.querySelector(".d-accept-reject .btn-danger").setAttribute("email-id",data.email);
                        }
                    }
                    // For Active Doctors 
                    if(activeDoctors){
                        for (let index = 0; index < activeDoctors.length; index++) {
                            const data = activeDoctors[index];
                            var doc_table_row = document.querySelector(".doctor-row.display-none");
                            var elem = doc_table_row.cloneNode(true);
                            elem.querySelector(".d-name").innerText = data.name;
                            elem.querySelector(".d-id").innerText = data.id;
                            elem.querySelector(".d-email").innerText = data.email;
                            elem.classList.remove("display-none");
                            doctorsTable.querySelector("tbody").append(elem);
                            elem.querySelector(".d-accept-reject .btn-success").remove();
                            elem.querySelector(".d-accept-reject .btn-danger").remove();
                        }
                    }
                }else{
                    $(".doctor-list-table").find(".empty-message").text("There are no doctors.")
                }                              
                })
                .catch((error) => {
                });
                 // Test
                
                doctorsTable.classList.remove("display-none");
            },1000);

            
    });
    // Counselor Click event
    counselorList.addEventListener('click', function(event){
        for (let index = 0; index < allTables.length; index++) {
            var element = allTables[index];
            element.classList.add("display-none");              
        }
        skeletonContainer.classList.remove("display-none");
            setTimeout(function(){
                skeletonContainer.classList.add("display-none");
                counsellorTable.querySelector("tbody").innerHTML = "";
                $(".Counsellor-list-table").find(".empty-message").text("")
                count = 1 ;
                fetch("http://localhost:9999/manager/getcounsellorslist", {
                    method: 'GET',
                    })
                    .then((response) => response.json())
                    .then((resp) => {
                                   
                    if(resp.status == "Success"){
						$(".counsellor-main-div").removeClass("display-none"); 	 	
                        var waitlistedCounselor = resp.waitlistedcounsellors;
                        var activeCounselor = resp.activecounsellor;
                        if(waitlistedCounselor){
                            for (let index = 0; index < waitlistedCounselor.length; index++) {
                                const data = waitlistedCounselor[index];
                                var con_table_row = document.querySelector(".counsellor-row.display-none");
                                var elem = con_table_row.cloneNode(true);
                                elem.querySelector(".c-name").innerText = data.name;
                                elem.querySelector(".c-id").innerText = data.id;
                                elem.querySelector(".c-email").innerText = data.email;
                                elem.classList.remove("display-none");
                                counsellorTable.querySelector("tbody").append(elem);
                                elem.querySelector(".c-accept-reject .btn-primary").remove();
                                elem.querySelector(".c-accept-reject .btn-success").setAttribute("id",data.id);
                                elem.querySelector(".c-accept-reject .btn-danger").setAttribute("id",data.id);
                                elem.querySelector(".c-accept-reject .btn-success").setAttribute("email-id",data.email);
                                elem.querySelector(".c-accept-reject .btn-danger").setAttribute("email-id",data.email);
                                
                            }
                        }
                        
                        // For Active Counselor
                        if(activeCounselor) {
                            for (let index = 0; index < activeCounselor.length; index++) {
                                const data = activeCounselor[index];
                                var con_table_row = document.querySelector(".counsellor-row.display-none");
                                var elem = con_table_row.cloneNode(true);
                                elem.querySelector(".c-name").innerText = data.name;
                                elem.querySelector(".c-id").innerText = data.id;
                                elem.querySelector(".c-email").innerText = data.email;
                                elem.classList.remove("display-none");
                                counsellorTable.querySelector("tbody").append(elem);
                                elem.querySelector(".c-accept-reject .btn-success").remove();
                                elem.querySelector(".c-accept-reject .btn-danger").remove();
                            }
                        }
                    }else{
                        $(".Counsellor-list-table").find(".empty-message").text("There are no doctors.")
                    }                              
                    })
                    .catch((error) => {
                    });
                // For WaitListed Counselor
               
                
                counsellorTable.classList.remove("display-none");
            },1000);
    });
    // Doctor Accept or Reject
    $(document).on('click', '.d-button',function(){
        debugger;
        var data = new Object();
        // data.id = $(this).attr("id");
        data.id = $(this).attr("email-id");
        data.action = $(this).attr("data-action");
        fetch("http://localhost:9999/manager/updateUser", {
            method: 'POST',
            body: JSON.stringify(data),
            })
            .then((response) => response.json())
            .then((data) => {
			//  BTN Changes : Start
                 var btntext = $(this).text().toLowerCase();
                 var displaymsg ="";
                 if(btntext == "accept"){
                     displaymsg = "Doctor Has Been Accepted"
                 }else if(btntext == "reject"){
                     displaymsg = "Doctor Has Been Rejected"
                 }else{
                     displaymsg = "Something Went Wrong"
                 }
                 Toastify({
                     text: displaymsg,
                     duration: 3000,
                     destination: "https://github.com/apvarun/toastify-js",
                     newWindow: true,
                     close: true,
                     gravity: "bottom", // `top` or `bottom`
                     position: "center", // `left`, `center` or `right`
                     stopOnFocus: true, // Prevents dismissing of toast on hover
                     style: {
                       background: "blue",
                     },
                     onClick: function(){} // Callback after click
                   }).showToast();
            $(".view-doctors").click();
            })
            .catch((error) => {
				Toastify({
                     text: "Something went wrong. Please try again",
                     duration: 3000,
                     newWindow: true,
                     close: true,
                     gravity: "bottom", // `top` or `bottom`
                     position: "center", // `left`, `center` or `right`
                     stopOnFocus: true, // Prevents dismissing of toast on hover
                     style: {
                       background: "red",
                     },
                     onClick: function(){} // Callback after click
                   }).showToast();
            });
    });

    
    // Counselor Accept or Reject
    $(document).on('click', '.c-button',function(){
        debugger;
        var data = new Object();
        // data.id = $(this).attr("id");
        data.id = $(this).attr("email-id");
        data.action = $(this).attr("data-action");
        fetch("http://localhost:9999/manager/updateUser", {
            method: 'POST',
            body: JSON.stringify(data),
            })
            .then((response) => response.json())
            .then((data) => {
				//  BTN Changes : Start
                 var btntext = $(this).text().toLowerCase();
                 var displaymsg ="";
                 if(btntext == "accept"){
                     displaymsg = "Counselor Has Been Accepted"
                 }else if(btntext == "reject"){
                     displaymsg = "Counselor Has Been Rejected"
                 }else{
                     displaymsg = "Something Went Wrong"
                 }
                 Toastify({
                     text: displaymsg,
                     duration: 3000,
                     newWindow: true,
                     close: true,
                     gravity: "bottom", // `top` or `bottom`
                     position: "center", // `left`, `center` or `right`
                     stopOnFocus: true, // Prevents dismissing of toast on hover
                     style: {
                       background: "blue",
                     },
                     onClick: function(){} // Callback after click
                   }).showToast();
             $(".view-counselor").click();
            })
            .catch((error) => {
				Toastify({
                     text: "Something went wrong. Please try again",
                     duration: 3000,
                     newWindow: true,
                     close: true,
                     gravity: "bottom", // `top` or `bottom`
                     position: "center", // `left`, `center` or `right`
                     stopOnFocus: true, // Prevents dismissing of toast on hover
                     style: {
                       background: "red",
                     },
                     onClick: function(){} // Callback after click
                   }).showToast();
            });
    });
    /*
    patientList.addEventListener('click', function(event){
        for (let index = 0; index < allTables.length; index++) {
            var element = allTables[index];
            element.classList.add("display-none");              
        }
        skeletonContainer.classList.remove("display-none");
            setTimeout(function(){
                skeletonContainer.classList.add("display-none");
                patientsTable.classList.remove("display-none");
            },1000);
    });
    */
   viewPatient.addEventListener('click', function(event){
        for (let index = 0; index < allTables.length; index++) {
            var element = allTables[index];
            element.classList.add("display-none");              
        }
        skeletonContainer.classList.remove("display-none");
            setTimeout(function(){
                skeletonContainer.classList.add("display-none");
                $(".Patient-list-table").find(".error-message").text("")
                // Tetsting
                /*
                var resp = {
                    patientList : [
                        {name: "A", id: 1,email:"13@12w.com"},
                        {name: "B", id: 1,email:"jimmu@.com"},
                        {name: "C", id: 1,email:"wfw@.com"},
                        {name: "D", id: 1,email:"vah@hmao.com"}
                      ],
                    status:"Success"
                }
                var patientList = resp.patientList;
                if(resp.status == "Success"){
                    $(".p-details-added").remove();
                    if(patientList){                       
                        for (let index = 0; index < patientList.length; index++) {
                            const data = patientList[index];
                            var doc_table_row = document.querySelector(".patient-row.display-none");
                            var elem = doc_table_row.cloneNode(true);
                            elem.querySelector(".p-name").innerText = data.name;
                            // elem.querySelector(".p-id").innerText = data.id;
                            elem.querySelector(".p-email").innerText = data.email;
                            $(elem).find("a").attr("href","profile?"+"id="+data.email+"&type=P");
                            elem.classList.remove("display-none");
                            elem.classList.add("p-details-added");
                            patientsTable.querySelector("tbody").append(elem);
                            
                        }
                        $(".Patient-list-table").find(".patient-table").removeClass("display-none");
                    }else{
                        $(".Patient-list-table").find(".error-message").text("There are no doctors.")
                    }
                    
                }else{
                    $(".error-message").find(".error-message").text("There are no doctors.")
                }                              
                $(".Patient-list-table").removeClass("display-none")
                */
                // End Testing
                
                // For WaitListed Doctors
                
                fetch("http://localhost:9999/manager/getpatientlist", {
                method: 'GET',
                })
                .then((response) => response.json())
                .then((resp) => {
                var patientList = resp.patients;
                if(resp.status == "Success"){
                    $(".p-details-added").remove();
                    if(patientList){                       
                        for (let index = 0; index < patientList.length; index++) {
                            const data = patientList[index];
                            var doc_table_row = document.querySelector(".patient-row.display-none");
                            var elem = doc_table_row.cloneNode(true);
                            elem.querySelector(".p-name").innerText = data.name;
                            // elem.querySelector(".p-id").innerText = data.id;
                            elem.querySelector(".p-email").innerText = data.email;
                            $(elem).find("a").attr("href","profile?"+"id="+data.email+"&type=P");
                            $(elem).find(".p-reject").attr("email-id",data.email);
                            elem.classList.remove("display-none");
                            elem.classList.add("p-details-added");
                            patientsTable.querySelector("tbody").append(elem);
                            
                        }
                        $(".Patient-list-table").find(".patient-table").removeClass("display-none");
                    }else{
                        $(".Patient-list-table").find(".error-message").text("There are no doctors.")
                    }
                    
                }else{
                    $(".error-message").find(".error-message").text("There are no doctors.")
                }                             
                })
                .catch((error) => {
                });
                $(".Patient-list-table").removeClass("display-none")
            },1000);
    });

    // Add patient click event
    addPatient.addEventListener('click', function(event){
            for (let index = 0; index < allTables.length; index++) {
            var element = allTables[index];
            element.classList.add("display-none");              
        }
        skeletonContainer.classList.remove("display-none");
            setTimeout(function(){
                skeletonContainer.classList.add("display-none");
                $(".add-patient-form").removeClass("display-none");
            },1000);
    });
    // patient form submit event
    patientRegisterForm.addEventListener('click', function(event){
        event.preventDefault();
        var form = this.parentElement;
        var firstName = form.querySelector(".firstName");
        var lastName = form.querySelector(".lastName");
        var email = form.querySelector(".email");
        var birthday = form.querySelector(".birthday");
        var address1 = form.querySelector(".address1");
        var address2 = form.querySelector(".address2");
        var mobileNumber = form.querySelector(".mobileNumber");
        var confirmPassword = form.querySelector(".confirmPassword");
        var password = form.querySelector(".password");
        var validationArr = [firstName,lastName,birthday,email,address1,address2,mobileNumber,password,confirmPassword];
        var shouldReturn = false;
        for (let index = 0; index < validationArr.length; index++) {
            const element = validationArr[index];
            if(element.value.trim().length == 0){
                element.parentElement.classList.add("aleart");
                shouldReturn = true;
            }else{
                element.parentElement.classList.remove("aleart");
            }
        }
        if(password.value.trim().length < 8){
            password.parentElement.querySelector("small").innerText = "Password is short. Minimum 8 characters are required"
            password.parentElement.classList.add("aleart");
            return false;
        }
        if(password.value.trim() != confirmPassword.value.trim()){
            confirmPassword.parentElement.classList.add("aleart");
            return false;
        }
        if(shouldReturn){
            return false;
        };
        // AJAX Request using the fetch
        // const payload = new FormData(form);
        // fetch(registerFetchUrl, {
        //     method: 'POST',
        //     body: payload,
        //     })
        //     .then((response) => response.json())
        //     .then((data) => {
        //     console.log("Success:", data);
        //     // Display Me
        //     })
        //     .catch((error) => {
        //     console.error("Error:", error);
        //     });
        form.submit();
    });
     // Patient Remove Event
    $(document).on('click', '.p-reject',function(){
        debugger;
        var data = new Object();
        // data.id = $(this).attr("id");
        data.id = $(this).attr("email-id");
        fetch("http://localhost:9999/manager/removeUser", {
            method: 'POST',
            body: JSON.stringify(data),
            })
            .then((response) => response.json())
            .then((data) => {
				Toastify({
                     text: "Patient Has been removed.",
                     duration: 3000,
                     newWindow: true,
                     close: true,
                     gravity: "bottom", // `top` or `bottom`
                     position: "center", // `left`, `center` or `right`
                     stopOnFocus: true, // Prevents dismissing of toast on hover
                     style: {
                       background: "blue",
                     },
                     onClick: function(){} // Callback after click
                   }).showToast();
             $(".view-patient").click();
            })
            .catch((error) => {
				Toastify({
                     text: "Something went wrong. Please try again",
                     duration: 3000,
                     newWindow: true,
                     close: true,
                     gravity: "bottom", // `top` or `bottom`
                     position: "center", // `left`, `center` or `right`
                     stopOnFocus: true, // Prevents dismissing of toast on hover
                     style: {
                       background: "red",
                     },
                     onClick: function(){} // Callback after click
                   }).showToast();
            });
    });
});

