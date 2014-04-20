package vb


import grails.rest.*

@Resource(uri = '/persons', formats = ['json', 'xml'])

class Person {
    String firstName
    String lastName
    Integer age

    static constraints = {
    }
}

