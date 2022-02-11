// $(function(){

//   $('#search').on('keyup',function(e){
//     let username=e.target.value;

//     $.ajax({
//       url:"https://api.github.com/users/"+username,
//       data:{
//         client_id:'df20e8aa78bea283656c',
//         client_secret:'1d9de0d655869dd05f29a25be7c15f058f7b0e77'
//       }
//     }).done(function(user){
//     $.ajax({
//       url:"https://api.github.com/users/"+username+'/repos',
//       data:{
//         client_id:'df20e8aa78bea283656c',
//         client_secret:'1d9de0d655869dd05f29a25be7c15f058f7b0e77'
//       }
//     }).done(function(repos){
//       $.each(repos,function(index,val){
//          $('#repos').append(`
//          <div class="card">
//          <div class="row">
//          <div class="col-md-7">
//          <strong>${val.name}</strong>
//          </div>
//          <div class="col-md-3"></div>
//          <div class="col-md-2"></div>
//          </div>
//          </div>
//          `)
//       });
//     })

//        $('#profile').html(`
//        <div class="container">
//          <div class="card">
//          <div class="card-heading">
//          <div class="card-title">${user.name}</div>
//          </div>
//          <div class="card-body">
//          <div class="row">
//          <div class="col-md-3">
//             <img class="thumbnail" src="${user.avatar_url}">
//             <a class=" mt-4 btn btn-primary btn-block" target="_blank" href="${user.html_url}">Vire Profile</a>
//          </div>
//          <div class="col-md-9">
//             <span class="label label-default">Public Repos: ${user.public_repos}</span>
//             <span class="label label-default">Public Repos: ${user.public_gists}</span>
//             <span class="label label-default">Public Repos: ${user.followers}</span>
//             <span class="label label-default">Public Repos: ${user.following}</span>
//             <br>
//          </div>
//          </div>
//          </div>
//          </div>
//          </div>
//          <h3 class="header">Latest Repos</h3>
//          <div id="repos"></div>

//        `)
//     })
//   })

// })


// $(function(){
//   $('#selectBtn').click(function(){
//     $('input:checkbox').attr('checked','checked')
// $(this).attr('disabled','disabled')
//   })
//   $('#deselectBtn').click(function(){
//     $('input:checkbox').removeAttr('checked')
//   })

//   $('#lang').change(function(){
//     alert($(this).val())
//   })

// })



// $('#load').click(function(){
//   $.ajax({
//     url:"https://jsonplaceholder.typicode.com/todos",
//     type:"GET",
//     dataType:'json',
//     success:function(data,status){
//       console.log(status)
//       console.log(data)
//       let todos="";
//       $.each(data,function(key,value){
//         todos +='<tr>';
//         todos +='<td>'+value.id + '</td>';
//         todos +='<td>'+value.userId + '</td>';
//         todos +='<td>'+value.title + '</td>';
//         todos +='<td>'+value.completed + '</td>';
//         todos += '</tr>'
//       })
//       $('#todos').append(todos)
//     },
//     error:function(result,status,error){
//       console.log("connot load datat")
//     },
//     complete:function(result,status){
//       console.log("loading completed")
//     }
//   })
// })





$(function () {
  $('#name-list').fadeOut();

  let $write = $('#write');
  $write.focus();

  $('#keyboard li').click(function () {
    let $this = $(this),
      character = $this.html();
    // If it's a lowercase letter, nothing happens to this variable

    // Delete
    if ($this.hasClass('delete')) {
      var html = $write.html();

      $write.html(html.substr(0, html.length - 1));
      return false;
    }

    // Add the character
    $write.html($write.html() + character);
  });

  //call the api

  $('#keyboard').on('click', function () {
    let write = $('#write').val().toLowerCase();

    $('#name-list').fadeIn();
  

    $.ajax({
      url: 'http://127.0.0.1/person/search',
      type: 'POST',
      dataType: 'json',
      data: {
        write: write,
      },
    }).done(function (data) {

      let inputUser=write.length;
      $.each(data, function (index, val) {
     
        if (
          write === val['firstname'].toLowerCase().substr(0, inputUser) ||
          write === val['lastname'].toLowerCase().substr(0, inputUser)
        ) {
          $('#not__found').fadeOut();
          $('#name-list').append(`
         
                     <ul class="list">
                       <li><i class="far fa-user fa-2x"> </i> <a  href="/x-sitec-concierge/idle/deliverPerson/1">${val.firstname} ${val.lastname}</a></li>
                     
                     </ul>
                     
          `);
        } else {
          $('#not__found').show();
        
        }
      });
    });

    $('.list').on('click', 'a', function (e) {
      e.preventDefault();
      websocketManager.handleLink($(this));
      /* $.ajax({
       url: $(this).attr('href'),
       type: "POST",
       dataType: 'json',
       data: {
       "write": write
       }
       });*/
      $('#write').val($(this).text());
    });

    $('.delete').on('click', function () {
      //    createList(personData);

      $('#name-list').fadeOut();
      $('#name-list').text('');
      $('#not__found').fadeOut();
    });
  });
});
