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