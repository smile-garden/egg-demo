<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>cookie</title>
</head>
<body>
  <h1>{{ title }}</h1>
  <button onclick="add()">Add cookie</button>
  <button onclick="show()">Show cookie</button>
  <button onclick="update()">Update cookie</button>
  <button onclick="del()">Del cookie</button>
  <h3>{{ name }}</h3>
  <h3>{{ counter }}</h3>

  <script>
    function add() {
      fetch('/cookie/add', {
        method: 'post',
        headers: {
          "Content-type": "application/json",
        }
      })
    }
    function show() {
      fetch('/cookie/show', {
        method: 'post',
        headers: {
          "Content-type": "application/json",
        }
      })
    }
    function update() {
      fetch('/cookie/update', {
        method: 'post',
        headers: {
          "Content-type": "application/json",
        }
      })
    }
    function del() {
      fetch('/cookie/del', {
        method: 'post',
        headers: {
          "Content-type": "application/json",
        }
      })
    }
  </script>
</body>
</html>