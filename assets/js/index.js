$("#add_user").submit(function (event) {
  alert("New user added successfuly!");
});

$("#update_user").submit(function (event) {
  event.preventDefault();

  const unindexed_array = $(this).serializeArray();
  const data = {};

  $.map(unindexed_array, function (n, i) {
    data[n["name"]] = n["value"];
  });
  console.log(data);

  const request = {
    url: `http://localhost:3000/api/users/${data.id}`,
    method: "PUT",
    data: data,
  };

  $.ajax(request).done(function (response) {
    alert("User information updated successfully!");
  });
  window.location.replace("/");
});

if (window.location.pathname == "/") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function () {
    const id = $(this).attr("data-id");

    const request = {
      url: `http://localhost:3000/api/users/${id}`,
      method: "DELETE",
    };

    if (confirm("Do you really want to delete this record?")) {
      $.ajax(request).done(function (response) {
        alert("User deleted successfully!");
        location.reload();
      });
    }
  });
}
