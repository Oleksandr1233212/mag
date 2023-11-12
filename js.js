function aha(){
    const arr = [3,5,8,16,20,23,50]
    const result=[]
    for(let i=0;i<arr.length;i++){
        result.push(arr[i])
    }
    console.log(result)
}
aha()


function amerika(){
     const data = [5, 10, 'Shopping', 20, 'Homework']
     const mdData = []

    for (let i = 0; i < data.length; i++) {
      if (typeof data[i] === 'number') {
        mdData.push(data[i] * 2)
     }else if (typeof data[i] === 'string') {
        mdData.push(data[i] + ' - done')
     }
    }
    console.log(mdData)
}

amerika()

function manka(){
    const data = [5, 10, 'Shopping', 20, 'Homework']
    const resulto=[]
    for(let i=1;i<=data.length;i++){
        resulto[i-1] = data[data.length-i]
    }
    console.log(resulto)

}
manka()


function dT(height) {
    for (let i = 1; i <= height; i++) {
      let spaces = ' '.repeat(height - i)
      let stars = '*'.repeat(2 * i - 1)
      console.log(spaces + stars)
    }
  }
  
const treeHeight = 5
dT(treeHeight)

function aka(a){

    console.log(a*a*a)
}
aka(2)


function fCN(stNumb) {
    const coupNumber = Math.ceil(stNumb / 4);
    return coupNumber;
}


const stNumb = 12;
const coup = fCN(stNumb);
console.log(`Номер купе для місця ${stNumb} - ${coup}`);

  


