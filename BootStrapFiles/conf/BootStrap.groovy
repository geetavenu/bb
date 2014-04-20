import vb.Person

class BootStrap {

    def init = { servletContext ->
        10.times{new Person(firstName:"first${it}",lastName:"last${it}",age:21).save(flush:true);}

    }
    def destroy = {
    }
}
