package vb

import grails.converters.JSON
//import org.codehaus.groovy.grails.plugins.springsecurity.GrailsUser

class BookController {
   // def usfCasService

    def index = {render "wrong"}

     def show = {
         //GrailsUser  user =    usfCasService.getPrincipal()
       //  println "user name is ${user.username}"
         println request.getRequestURI()
         println request.getRequestURL().toString()

        println "in show"

        params.each{println it}
        if (params.id) {
            render Book.get(params.id) as JSON
        }
        else if(params.name)

        { println("in name")

            render Book.executeQuery(""" from Book b where lower(b.title) like lower('%${params.name}%') """).collect{it as JSON}
        }




        else {
            println ("in else")
            println (Book.list() as JSON)
            render Book.list() as JSON
        }

    }

    def display = {

        render Book.get(params.id) as JSON
    }

    def update = {
        Book reqbook = new Book(request.JSON)
        Book book =  Book.get(params.id)
        book.title = reqbook.title
        book.author = reqbook.author
        book.save(flush:true)
        render book as JSON
    }

    def save ={
        Book reqbook = new Book(request.JSON)
        Book book = new Book();
        book.title = reqbook.title
        book.author = reqbook.author
        book.save(flush:true)
        render book as JSON
    }

    def delete ={
        println ("in delelete id is ${params.id}")
        Book book =  Book.get(params.id)
        book.delete()
        response.status=200
        render ""
    }
}
