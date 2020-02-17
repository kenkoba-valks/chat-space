$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html =
    `<div class="mainchat__contents-first" data-message-id=${message.id}>
      <div class="mainchat__contents-first-item">
        <div class="mainchat__contents-first-item-username">
          ${message.user_name}
        </div>
        <div class="mainchat__contents-first-item-date">
          ${message.created_at}
        </div>
      </div>
      <div class="mainchat__contents-first-content">
        <p class="mainchat__contents-first-message-content">
          ${message.content}
        </p>
      </div>
      <img src=${message.image} >
    </div>`
      return html;
    } else {
      var html =
    `<div class="mainchat__contents-first" data-message-id=${message.id}>
      <div class="mainchat__contents-first-item">
        <div class="mainchat__contents-first-item-username">
          ${message.user_name}
        </div>
        <div class="mainchat__contents-first-item-date">
          ${message.created_at}
        </div>
      </div>
      <div class="mainchat__contents-first-content">
        <p class="mainchat__contents-first-message-content">
          ${message.content}
        </p>
      </div>
    </div>`
      return html;
    };
  }
  
  $('#new_message').on('submit', function(e){
    
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.mainchat__contents').append(html);      
      $('form')[0].reset();
      $('.mainchat__contents').animate({ scrollTop: $('.mainchat__contents')[0].scrollHeight});
      $('.form__submit').prop('disabled', false);
    })
  })
  .fail(function() {
    alert("メッセージ送信に失敗しました");
  })
});




     