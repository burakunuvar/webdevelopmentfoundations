
- [HTML CHEAT SHEET](https://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf)

### Query Parameters :

Every `GET` request to by an "HTML Form" generates a Query Parameter and adds a string to the end of URL

```
key == name and value == default or input
/test/contactForm?name1=value1&name2=value2
```

### Request Body Parameters :

Every `POST` request to by an "HTML Form" generates a Body Parameter and is stored in the body of HTTP Request.


### Path Parameters :

Path parameters are variable parts of a URL path. They are typically used to point to a specific resource within a collection

```
/test/{Id}/subfolder/{Id2}
```

- **Learning Lesson 1:** *Query parameters are added to the url after the ? mark, while a path parameter is part of the regular URL.*
