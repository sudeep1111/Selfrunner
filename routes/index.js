<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
        table,
        th,
        td {
            border: 1px solid black;
        }
    </style>
</head>

<body>
    <h1>User Info and Hobbies from Cruds app</h1>

  
    <table style="width:100%">
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Hobbies</th>
        </tr>
        <% users.forEach(user=>{ %>
        <tr>
            <td><%= user.name %> </td>
            <td><%= user.email %> </td>
            <td><%= user.phone %> </td>
            <td><%= user.hobbies %> </td>
        </tr>
        <% }) %>
        
    </table>
       
</body>

</html>
