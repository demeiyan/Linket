/*! ross */
"use strict";angular.module("PersonalInfoControllers",["PersonalInfoServices"]).controller("PersonalListController",["$scope","PersonalListService",function(a,b){a.users={},b.query(function(b){a.users={list:b,total:b.length,pageSize:b.length/10}})}]);