/**
 * Created by vladimiro.agudo on 23/03/2015.
 */
(function(){
    var visitas = 0;

    var incrementarVisitas = function(){
        visitas += 1;
        console.log("Visitas programador 1 " + visitas);
    }

    var decrementarVisitas = function(){
        visitas -=1;
    }

    return {
        incrementarVisitas : incrementarVisitas,
        decrementarVisitas : decrementarVisitas
    }

}());

