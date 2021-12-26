console.log('CLIENT SIDE JS FILE IS LOADEd');

const z = fetch('/weather?address=asdas').then((res)=>{

    console.log('DATA HERE',res);
})