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
