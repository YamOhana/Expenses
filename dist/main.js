



$('#btn').on('click', function(){

    let expns = $('#input').val();
    $get(`/expenses/${expns}`, (data) => {
        render.render(data);

    })


})