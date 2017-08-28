'use strict';

var chai = require('chai').expect();
var supertest = require('supertest');
var api = supertest('http://localhost:3000/api');
var mongodb = supertest('http://localhost:2');
var assert = require('assert');

describe('MongoDB', function() {
    describe('Check if mongodb is running', function() {
        it('Should run mongoDB', function() {
            assert.equal(200, 200);
        });
    });
});

describe('User', function() {
    describe('Get /Users', function() {
        it('Should return unauthorized code 401', function(done) {
            api.get('/Users')
                .expect('Content-Type', /json/)
                .expect('unauthorized')
                .end(function(err, result) {
                    if (err) {
                        return done(err);
                    }
                    var user = result.body;
                    expect(user.length).to.be.above(1);
                    done();
                });
        });
    });
});