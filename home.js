var loading = 0;
window.onload=()=>{
  for (let i = 0; i < 4; i++) {
    loading+=25;
    if (loading<=100) {
      document.querySelector(".progress-bar").style.width=`${loading}%`
     
    }

    if (loading==100) {
      console.log("loaded");
     setTimeout(() => {
      document.querySelector(".progress").style.display="none";
      document.querySelector(".loaded").style.display="block";
     }, 1000);
    }


  }


}