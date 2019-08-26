function DigitalMentor(){
    var stickys = [];

    function stickyInput(name,problem){
        let stickyName = name
         

        if(stickyName === ""){
            warningMessage = "Please enter your name"
            return false;
        }
        if( problem === ""){
            warningMessage = "Please enter the problem you are experiencing"
        }else{
            var theProblem = {
                'name' : stickyName,
                'msg' : problem
            }
            stickys.push(theProblem)
            return theProblem
        }


    }
    

    function stickyCounter(){
       return stickys.length;

    }

    function warningSticky(){
        return warningMessage;
    }

    function assistedSticky(width){
        for (var i=width;i>0;i--){
            
        }

    }

    function stickyList(){
        return stickys
    }


    return{
        stickyInput ,
        stickyCounter,
        warningSticky,
        assistedSticky,
        stickyList
    }

}