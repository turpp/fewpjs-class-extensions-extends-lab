// Your code here
class Polygon{
    constructor(sideArr){
        this.sideArr = sideArr
    }

    get countSides(){
        return this.sideArr.length
    }

    get perimeter(){
        return this.sideArr.reduce(function(side, cv){
            return side + cv
        })
    }
    
   

}

class Triangle extends Polygon {
    get isValid(){
        let pair1= this.sideArr[0]+this.sideArr[1]
        let pair2= this.sideArr[0]+ this.sideArr[2]
        let pair3 = this.sideArr[1]+this.sideArr[2]

        if(pair1 < this.sideArr[2]){
            return false
        } else if(pair2 < this.sideArr[1]){
            return false
        } else if(pair3 < this.sideArr[0]) {
            return false
        } else {
            return true
        }
    }
}
class Square extends Polygon{
    get isValid(){
        console.log(this.sideArr)
        console.log(this.sideArr[0] != this.sideArr[1])

        if(this.sideArr[0]!= this.sideArr[1]){

            return false
        }else if(this.sideArr[0]!= this.sideArr[2]){

            return false
        }else if(this.sideArr[0]!= this.sideArr[3]){

            return false
        }else{
            return true
        }
     }

    get area(){
        return this.sideArr[0]*this.sideArr[1]
    }
}
