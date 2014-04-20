import vb.Book

class BootStrap {

    def init = { servletContext ->
        println("in context");
        new Book(title:'Java In A Nutshell, 5th Edition' , description: 'Java in a Nutshell, 5th Edition now places less emphasis on coming to Java from C and C++, and adds more discussion on tools and frameworks.',
                author:'David Flanagan',imageUrl: 'images/javaInNutShell.jpg' ).save(flush: true)

        new Book(title:'The Definitive Guide to Grails' , description: 'The Definitive Guide to Grails by Grails lead Graeme Rocher is for anyone looking for a more agile approach to web development with a dynamic scripting language such as Groovy.',
                author:'Graeme Rocher',imageUrl: 'images/grailsDefinitive.jpeg' ).save(flush: true)
        new Book(title:'Oracle PL/SQL' , description: 'Oracle PL/SQL Programming covers language fundamentals, advanced coding techniques, and best practices for using Oracle\'s powerful procedural language.',
                author:'Steven Feuerstein',imageUrl: 'images/plsqlprog.jpg' ).save(flush: true)
        new Book(title:'Groovy in Action' , description: 'Groovy in Action introduces Groovy by example, presenting lots of reusable code while explaining the underlying concepts.',
                author:'Dierk Koenig',imageUrl: 'images/groovyIA.jpg' ).save(flush: true)

    }
    def destroy = {
    }
}
