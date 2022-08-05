function door() {
    let doorHeight = 200;
    let doorWidth = 90;

    let width = 200;
    let height = 180;
    let depth = 80;




    let doesFrontPass = ((doorHeight >= height)&&((doorWidth  >= width))) || ((doorWidth >= height) && (doorHeight >= width));
    console.log(doesFrontPass);

    let doesSidePass = ((doorHeight >= height)&&((doorWidth  >= depth))) || ((doorWidth > height) && (doorHeight >= depth));
    console.log(doesSidePass);

    let doesTopPass = ((doorHeight >= width)&&(doorWidth  >= depth)) || ((doorWidth >= width) && (doorHeight >= depth));
    console.log(doesTopPass);

    let doesItPass = (doesFrontPass || doesSidePass || doesTopPass);
    console.log(doesItPass);


}
door();