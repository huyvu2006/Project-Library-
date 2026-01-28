class Book {
  constructor (ten,tacgia,namxuatban,theloai) {
    this.ten = ten;
    this.tacgia = tacgia;
    this.namxuatban = namxuatban;
    this.theloai = theloai
    this.id = crypto.randomUUID()
    this.state = function(trangthai) {
      this.state= trangthai;
    }
  }

  addBookToLibrary(sach) {
    myLibrary.push(sach)
  }

}

class Layout {
  taoKhung () {
  let div = document.createElement('div')
  div.classList.add('card')
  return {div}
}

  taoNutChucNang (sachCanXoa,doiTuong) {
  let xoa = document.createElement('button')
  xoa.textContent='XOA SACH'
  xoa.addEventListener('click',() => {
  bodyy.removeChild(sachCanXoa)
  })
  let readed = document.createElement('button')
  readed.textContent='DA DOC SACH'
  readed.addEventListener('click',() => {
    let daDoc = document.querySelector('.daDoc')
    daDoc.textContent = 'TRANG THAI: DA DOC'
  })
  return {xoa,readed}
}

  themThongTinSach(doiTuong,obj) {
  for (let thuocTinh in doiTuong) {
    if (thuocTinh != 'state') {
      let text = document.createElement('p')
      text.textContent = `${thuocTinh}: ${doiTuong[thuocTinh]}`
      obj.appendChild(text)
    }
    else if (thuocTinh == 'state') {
      let text = document.createElement('p')
      text.textContent = `${thuocTinh}: CHUA DOC`
      obj.appendChild(text)
      text.classList.add('daDoc')
    }
  }
}
}
const myLibrary = []
const bodyy = document.querySelector('.bodyy');
let dialog = document.querySelector('dialog')
let taoMoi = document.querySelector('.taomoi')
let tenSach = document.querySelector('#ten')
let tacGia = document.querySelector('#tacgia')
let namXuatBan = document.querySelector('#namxuatban')
let theLoai = document.querySelector('#theloai')
let gui = document.querySelector('#gui')
taoMoi.addEventListener('click',() => {
  dialog.showModal()
})

gui.addEventListener('click',() => {
  event.preventDefault()
  let taoSach = new Book(`${ten.value}`,`${tacgia.value}`,`${namxuatban.value}`,`${theloai.value}`)
  taoSach.addBookToLibrary(taoSach)
  let taoGiaoDien = new Layout
  let khung = taoGiaoDien.taoKhung().div
  bodyy.appendChild(khung)
  taoGiaoDien.themThongTinSach(taoSach,khung)
  khung.appendChild(taoGiaoDien.taoNutChucNang(khung,taoSach).readed)
  khung.appendChild(taoGiaoDien.taoNutChucNang(khung,taoSach).xoa)
  dialog.close()
})
