document.getElementById("Country").onchange=checkselected
        document.getElementById("Country").onblur=checkselected
        
        function checkselected(){
            var prop = document.getElementById("Country").value
            if(!prop.match("others")){
                document.getElementById("othersfield").style="display:none"
            }else{
                document.getElementById("othersfield").style="display:inline"
                document.getElementById("othersfield").focus()
            }
        }
        
        document.getElementById("name").onchange=()=>{
            var tests=/^[0-9]+$/
            var value=document.getElementById("name").value
            if(tests.test(value)){
                window.alert("Only alphabets")
            }
        }
        document.getElementById("email").onchange=()=>{
            var tests=/^([a-zA-Z0-9+_#]+)@([a-zA-Z]+)\.([a-zA-Z]{2,3})$/ // both valid
            var tes=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ //both valid
            var valuee=document.getElementById("email").value
            if(!valuee.match(tests))
                document.getElementById("erremail").innerHTML="Invalid Email format!!!"
            else
                document.getElementById("erremail").innerHTML=" "
            }
        document.getElementById("pass").onchange=()=>{
            var tests=/^([a-zA-Z0-9@!#$%^&_-]{8,16})$/
            var valuee=document.getElementById("pass").value
            if(!valuee.match(tests))
                document.getElementById("errpass").innerHTML="Password must be of 8-16 characteres, and may contain a-z A-Z 0-9 @!#$%^&_-"
            else{
                document.getElementById("errpass").innerHTML=" "
                checkpassstrength(valuee);
            }
            }
            function checkpassstrength(val){
                var tests=/[A-Z@!$%^&-_]+/
                if(!tests.test(val))
                    document.getElementById("errpass").innerHTML="Password Weak"
                else
                    document.getElementById("errpass").innerHTML="Password Strong"
            }
            document.getElementById("cpass").onchange=()=>{
                var tests=document.getElementById("pass").value
                var val=document.getElementById("cpass").value
                if((!tests.match(val))||(!val.match(tests)))
                    document.getElementById("errcpass").innerHTML="Password does not match"
                else
                    document.getElementById("errcpass").innerHTML=" "
            }
        document.getElementById("zip").onchange=()=>{
            var tests=/^[0-9]{6,6}$/
            var valuee=document.getElementById("zip").value
            if(!valuee.match(tests))
                document.getElementById("errzip").innerHTML="zipcode must be of 6 digits only"
            else
                document.getElementById("errzip").innerHTML=" "
            }
        window.onload=()=>{
            generatecap();
        }
        function generatecap(){
            let max=9
            let max2=35
            let min=0
            var data_set=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
            //way 1
            // var a=data_set[Math.round(Math.random()*(max-min)-min)];
            // var b=data_set[Math.round(Math.random()*(max2-min)-min)];
            // var c=data_set[Math.round(Math.random()*(max2-min)-min)];
            // var d=data_set[Math.round(Math.random()*(max2-min)-min)];
            //document.getElementById("capbut").value=`${a} ${b} ${c} ${d}`;
            //way 2
            let caplen=4
            var a=""
            for(let i=0;i<caplen;i++){
                a=a+' '+data_set[Math.round(Math.random()*(max2-min)-min)];
            }
            document.getElementById("capbut").value=`${a}`
            //window.alert(a+b+c+d);
        }
        document.getElementById("cap").onchange=()=>{
            var val=removespaces(document.getElementById("cap").value)
            var tests=removespaces(document.getElementById("capbut").value)
            if(!tests.match(val)||!val.match(tests)){
                document.getElementById("errcap").innerHTML="Invalid Captcha";
            }else
                document.getElementById("errcap").innerHTML=" ";
        }
        function removespaces(val){
            return val.split(" ").join("")
        }