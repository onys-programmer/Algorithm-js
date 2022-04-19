function solution(new_id) {
    var id = new_id.toLowerCase().replace(/[^a-z0-9-_\.]/g,'');
    var id = id.replace(/\.+/g, '.');
    var id = id.replace(/^(\.)|(\.)$/g, '');
    // var id = id.replace(/^(\.)/, '');
    // var id = id.replace(/(\.)$/, '');
    if (id.length == 0){
        id = 'a';
    }
    if (id.length >= 16){
        var id = id.substr(0,15).replace(/(\.)$/, '');
    }
    // while (id.length < 3){
    //     var id = id + id[id.length-1];
    // }
    // return id;
    return id.padEnd(3,id[id.length-1]);
}


// 4단계 부분에서 에러가 나서 처음 마침표와 마지막 마침표를 나눠서 계산했는데, 
// var id = id.replace(/^(\.)|(\.)$/, ''); 라고 구현했었어서 정규식 뒤에 g 안써서 에러나던거였다..
