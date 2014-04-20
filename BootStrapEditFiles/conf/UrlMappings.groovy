class UrlMappings {

    static mappings = {
        "/books/$id?"(controller:"book")  {
            action=[GET:"show",POST:'save', PUT:'update', DELETE:'delete']
        }

        "/bookLists/$name?"(controller:"book")  {
            action=[GET:"show",POST:'save', PUT:'update', DELETE:'delete']
        }

        "/"(view:"/index")
        "500"(view:'/error')
    }
}
