$.ajax({
  url: "https://randomuser.me/api/?results=10",
  dataType: "json",
  success: function ({ results }) {
    const flexDiv = $("#users");

    for (let i = 0; i < results.length; i++) {
      flexDiv.append(`
      <div class="user">
        <img src="${results[i].picture.medium}">
        <p>${results[i].name.first} ${results[i].name.last}</p>
      </div>
      `);
    }
  },
});
