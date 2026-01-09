const myLibrary = [];

function Book(ten,tacgia,namxuatban,theloai) {
    this.ten = ten;
    this.tacgia = tacgia;
    this.namxuatban = namxuatban;
    this.theloai = theloai
    this.id = crypto.randomUUID()
    this.state = function(trangthai) {
      this.state= trangthai;
    }
}

function addBookToLibrary(sach) {
  myLibrary.push(sach);
}

let cc = new Book('toan','vu','2025','giaoduc')
let ccc = new Book('nguvan','vu','2025','giaoduc')
addBookToLibrary(cc)
addBookToLibrary(ccc)


let bodyy = document.querySelector('.bodyy');



function Them (arr) {
  arr
  .map((val) => {
    Object.setPrototypeOf(val,Book)
    let xoa = document.createElement('button')
    xoa.textContent='xoa'
    let readed = document.createElement('button')
    readed.textContent='da doc'
    let div = document.createElement('div')
    div.classList.add('card')
    bodyy.appendChild(div)
   for (pt in val) {
    if (pt != 'state') {
    let ok = document.createElement('p')
    ok.textContent = `${pt}: ${val[pt]}`;
    div.appendChild(ok);}
    else if (pt == 'state') {
    let ok = document.createElement('p')
    ok.textContent = `${pt}: none`;
    div.appendChild(ok);
     readed.addEventListener('click',()=>{
      let chay = new Book()
      chay.state('doc roi')
      let thay = document.createElement('p')
      thay.textContent = `${pt}: ${chay.state}`
      console.log(chay.state)
      div.replaceChild(thay,ok)
    })
    }
  }
    div.appendChild(xoa)
    xoa.addEventListener('click',()=> {
      bodyy.removeChild(div)
    })
    div.appendChild(readed)
  })
    console.log(myLibrary)

}

Them(myLibrary)

let dialog = document.querySelector('dialog')
let taomoi = document.querySelector('.taomoi')
let ten = document.querySelector('#ten')
let tacgia = document.querySelector('#tacgia')
let namxuatban = document.querySelector('#namxuatban')
let theloai = document.querySelector('#theloai')



taomoi.addEventListener('click',() => {
  dialog.showModal()
})

let gui = document.querySelector('#gui')
gui.addEventListener('click',() => {
  event.preventDefault()
  let cc = new Book(`${ten.value}`,`${tacgia.value}`,`${namxuatban.value}`,`${theloai.value}`)
  addBookToLibrary(cc)
  Them(myLibrary)
  dialog.close()
})



