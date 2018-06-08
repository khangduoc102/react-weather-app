const weatherConditionCode = (id) => {
    var code= '11d';
    if(199<id && id<233){
        code='11d';
    }
    else if(299<id && id<500){
        code='09d';
    }
    else if(id>=500 && id<505){
        code='10d';
    }
    else if(id>=520 && id<=531){
        code='09d';
    }
    else if(id==511){
        code='13d';
    }
    else if(id>=600 && id<=622){
        code='13d';
    }
    else if(id>=700 && id<=781){
        code='50d';
    }
    else if(id==800){
        code='01d';
    }
    else if(id==801){
        code='02d';
    }
    else if(id==802){
        code='03d';
    }
    else if(id>=803 && id<=804){
        code='04d';
    }
    return code;
}

export default weatherConditionCode;