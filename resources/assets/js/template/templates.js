module.exports = /*@ngInject*/ angular.module("poke.template", []).run(["$templateCache", function($templateCache) {$templateCache.put('home/home.html','<div class="row panel no-margin-bottom">\n    <div class="col s12 l7">\n        <div class="center hide-on-med-and-down">\n            <h2>Last Trades</h2>\n        </div>\n        <poke-list items="home.trades" per-page="10" hover="true" class="hide-on-med-and-down">\n            <list-header>\n                <div class="col s4">Card</div>\n                <div class="col s2">To</div>\n                <div class="col s2">From</div>\n                <div class="col s1">PP</div>\n                <div class="col s3">At</div>\n            </list-header>\n            <item>\n                <div class="col s4">\n                    <img-load poke-src="item.card.image_url" class="small-img"></img-load>\n                    <a  ng-href="/details/{{ item.card.id_card }}">{{ item.card.name }}</a>\n                </div>\n                <div class="col s2"><a ng-href="/user/{{ item.user.id_user }}">{{ item.user.login }}</a></div>\n                <div class="col s2"><a ng-href="/user/{{ item.user_from.id_user }}">{{ item.user_from.login }}</a></div>\n                <div class="col s1">{{ item.pp }}</div>\n                <div class="col s3">\n                    {{ item.updated_at }}\n                </div>\n            </item>\n        </poke-list>\n    </div>\n    <div class="col l5 s12">\n        <div class="center">\n            <h2>Whats news ?</h2>\n        </div>\n        <div class="slider">\n            <ul class="slides">\n                <li>\n                    <img src="/img/banner_1.png">\n                </li>\n                <li>\n                    <img src="/img/banner_2.png">\n                </li>\n                <li>\n                    <img src="/img/banner_3.png">\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div class="col-sm-12">\n        <h3>Process for send card</h3>\n        <ul class="collapsible" data-collapsible="accordion">\n            <li>\n                <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>\n                <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>\n            </li>\n            <li>\n                <div class="collapsible-header"><i class="material-icons">place</i>Second</div>\n                <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>\n            </li>\n            <li>\n                <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>\n                <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>\n            </li>\n        </ul>\n    </div>\n</div>\t');
$templateCache.put('login/login.html','<div class="container row">\n    <form autocomplete="off" class="col offset-s3 s6 margin-top" ng-submit="login.auth(login.user)">\n        <div class="input-field col s12 m6">\n            <input id="login1" type="text" class="validate" minlength="6" maxlength="20" required name="login" ng-model="login.user.login">\n            <label data-error="wrong" data-success="right" for="login1" ng-class="{\'active\':user.login.length > 0}">Login</label>\n        </div>\n        <div class="input-field col s12 m6">\n            <input id="password1" type="password" class="validate" minlength="6" maxlength="20" required name="password" ng-model="login.user.password">\n            <label data-error="wrong" data-success="right" for="password1" ng-class="{\'active\':user.password.length > 0}">Password</label>\n        </div>\n        <div ng-if="login.message" class="input-field col s12">\n            <span class="red-text">{{ login.message }}</span>\n        </div>\n        <div class="col s12 login group-button margin-top">\n            <button type="submit" class="waves-effect waves-light btn">Login</button>\n            <a href="#register" class="waves-effect waves-light btn blue modal-trigger">Register</a>\n        </div>\n    </form>\n</div>\n\n<!-- Modal Structure -->\n<div id="register" class="modal">\n    <div class="modal-content">\n        <h4>Register</h4>\n        <form autocomplete="off" ng-submit="login.register(login.user_new)" class="row">\n            <div class="input-field col s12">\n                <input id="login" type="text" class="validate" minlength="6" maxlength="20" required name="login" ng-model="login.user_new.login">\n                <label data-error="wrong" data-success="right" for="login">Login</label>\n            </div>\n            <div class="input-field col s12">\n                <input id="email" type="text" class="validate" minlength="6" maxlength="150" required name="email" ng-model="login.user_new.email">\n                <label data-error="wrong" data-success="right" for="email">Email</label>\n            </div>\n            <div class="input-field col s6">\n                <input id="password" type="password" class="validate" minlength="6" maxlength="20" required name="password" ng-model="login.user_new.password">\n                <label data-error="wrong" data-success="right" for="password">Password</label>\n            </div>\n            <div class="input-field col s6">\n                <input id="password_confirmation" type="password" class="validate" minlength="6" maxlength="20" required name="password" ng-model="login.user_new.password_confirmation">\n                <label data-error="wrong" data-success="right" for="password_confirmation">Confirmation Password</label>\n            </div>\n            <div class="margin-top">\n                <button type="submit" class="waves-effect waves-green btn-flat right">Confirm</button>\n            </div>\n        </form>\n    </div>\n</div>');
$templateCache.put('my-cards/my-cards.html','<div class="row panel no-margin-bottom">\n    <div class="col s12 m8">\n        <div class="card blue-grey darken-1 my-card">\n            <span class="card-title"><strong>Last Message</strong></span>\n            <p ng-if="!myCards.lastMessage">Noting to Showing</p>\n            <p ng-if="myCards.lastMessage">{{ myCards.lastMessage.text }} - <a ng-href="/user/{{myCards.lastMessage.from.id_user}}">{{ myCards.lastMessage.from.login }}</a></p>\n        </div>\n        <div class="card blue-grey darken-1 my-card">\n            <span class="card-title"><strong>Last Trade</strong></span>\n            <p ng-show="!myCards.lastTrade">Noting to Showing</p>\n            <p ng-show="myCards.lastTrade" ng-bind-html="myCards.lastTrade.text"></p>\n            <p ng-bind-html-unsafe="myCards.lastTrade.text"></p>\n        </div>\n    </div>\n    <div class="col s6 m4">\n        <div class="center-align">\n            <a href="/new-card" class="waves-effect waves-light btn btn-small">Add Card\n            </a>\n        </div>\n    </div>\n    <div class="col s6 m4">\n        <ul class="collection with-header">\n            <li class="collection-header center-align">My Cards Resume</li>\n            <li class="collection-item">Total Cards <span data-badge-caption="cards"\n                                                          class="badge">{{ (myCards.total?myCards.total:0) }}</span></li>\n        </ul>\n    </div>\n    <div class="col s12">\n        <table>\n            <thead>\n            <tr>\n                <th>Card</th>\n                <th>Set</th>\n                <th class="center-align">Foil</th>\n                <th class="center-align">Reverse Foil</th>\n                <th class="center-align">Full Art</th>\n                <th class="center-align">Added At</th>\n                <th></th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr ng-repeat="list in myCards.cards">\n                <td class="valign-wrapper"><img-load poke-src="list.card.image_url"></img-load>\n                    <a class="valign" ng-href="/details/{{ list.card.id_card }}">{{ list.card.name_card }}</a></td>\n                <td>{{ list.card.code_set }}</td>\n                <td class="center">\n                    <input name="1" disabled type="checkbox" ng-model="list.foil" class="form-control" id="foil"/>\n                    <label for="foil"></label>\n                </td>\n                <td class="center">\n                    <input name="2" disabled type="checkbox" ng-model="list.reverse_foil" class="form-control" id="reverse_foil"/>\n                    <label for="reverse_foil"></label>\n                </td>\n                <td class="center">\n                    <input name="3" disabled type="checkbox" ng-model="list.full_art" class="form-control" id="full_art"/>\n                    <label for="full_art"></label>\n                </td>\n                <td>{{ list.created_at }}</td>\n                <td class="center">\n                    <button ng-show="false" ng-disabled="true" class="btn btn-small">Edit</button>\n                    <button class="btn red btn-small" modal-id="{{ list.id_user_card }}" callback="myCards.remover(list)" confirmation="Voc\xEA deseja remover {{ list.card.name_card }} ?">Remove</button>\n                </td>\n            </tr>\n            <tr ng-hide="myCards.cards.length">\n                <td colspan="7" class="text-center">Noting to show here</td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n</div>');
$templateCache.put('search/search.html','<div class="row panel no-margin-bottom">\n    <div class="col s12">\n        <h2>Search</h2>\n        <p>Seache all cards pokemon!</p>\n    </div>\n    <form ng-submit="search.search(search.filter)">\n        <input type="hidden" ng-model="search.filter.limit">\n        <div class="input-field col s12 m3">\n            <input name="set" id="set" class="form-control" type="text" ng-model="search.filter.set">\n            <label for="set">Set</label>\n        </div>\n        <div class="input-field col s12 m4">\n            <input name="name" id="name" class="form-control" type="text" ng-model="search.filter.name">\n            <label for="name">Card Name</label>\n        </div>\n        <div class="input-field col s12 m3">\n            <input name="number" id="number" class="form-control" type="text" ng-model="search.filter.number">\n            <label for="number">Card Number</label>\n        </div>\n        <div class="col s12 m2">\n            <button type="submit" class="btn right btn-small waves-effect waves-light margin-top btn-block">Search</button>\n        </div>\n    </form>\n    <div class="col s12">\n        <poke-list per-page="10" url="{{ search.url }}" hover="true" filter="search._filter">\n              <list-header>\n                 <div class="col s3" ng-class="{\'m3\':!search.user, \'m2\': search.user }">Set</div>\n                 <div class="col s4" ng-class="{\'m7\':!search.user, \'m5\': search.user }">Card</div>\n                 <div class="col hide-on-med-and-down m2">Rarity</div>\n                 <div ng-show="search.user" class="col s5 m3"></div>\n             </list-header>\n             <item>\n                <div class="col s3 valign" ng-class="{\'m3\':!search.user, \'m2\': search.user }">\n                  <span title="{{ item.set }}">{{ item.code_set }}</span>\n                </div>\n                <div class="col s4" ng-class="{\'m7\':!search.user, \'m5\': search.user }">\n                    <img-load poke-src="item.image_url" class="small-img"></img-load>\n                    <a class="hide-on-med-and-down" ng-href="/details/{{ item.id_card }}">{{ item.name_card }}</a>\n                </div>\n                <div class="col s12 m2 valign hide-on-med-and-down">\n                    <span>{{ item.rarity }}</span>\n                </div>\n                <div class="col s5 m3 btn-group valign" ng-show="search.user">\n                    <div class="col s6">\n                        <button class="btn btn-small waves-effect waves-light blue btn-block modal-content" ng-click="search.opemHave(item,\'want\')">Want</button>\n                    </div>\n                    <div class="col s6">\n                        <button class="btn btn-small waves-effect waves-light red btn-block modal-content" ng-click="search.opemHave(item,\'have\')">Have</button>\n                    </div>\n                    <div class="col s4" ng-if="false">\n                        <button class="btn btn-small waves-effect waves-light orange btn-block modal-content" ng-click="search.opemHave(item,\'watch\')">Watch</button>\n                    </div>\n                </div>\n            </item>\n        </poke-list>\n    </div>\n</div>  \n\n<div id="have" class="modal">\n    <form ng-submit="search.have(search.card_modal)">\n        <div class="modal-content">\n            <div class="col s12">\n                <h3>Add <strong> {{ search.card_modal.name_card }}</strong></h3>\n            </div>\n            <div class="input-field col s12 m6">\n                <input name="amount" id="amount" class="form-control" type="text" ng-model="search.card_modal.amount" />\n                <label for="amount">Amount</label>\n            </div>\n            <div class="input-field col s2">\n                <input name="foil" id="foil" class="form-control" type="checkbox" ng-model="search.card_modal.foil" />\n                <label for="foil">Foil</label>\n            </div>\n            <div class="input-field col s2">\n                <input name="reverse_foil" id="reverse_foil" class="form-control" type="checkbox" ng-model="search.card_modal.reverse_foil" />\n                <label for="reverse_foil">Reverse Foil</label>\n            </div>\n            <div class="input-field col s2">\n                <input name="full_art" id="full_art" class="form-control" type="checkbox" ng-model="search.card_modal.full_art" />\n                <label for="full_art">Full Art</label>\n            </div>\n        </div>\n        <div class="modal-footer btn-group">\n            <button type="button" class="btn red white-text modal-close">Cancelar</button>\n            <button type="submit" class="btn blue white-text">Adicionar</button>\n        </div>\n    </form>\n</div>\n\n<div id="want" class="modal">\n    <form ng-submit="search.want(search.card_modal)">\n        <div class="modal-content">\n            <div class="col s12">\n                <h3>Add Want <strong> {{ search.card_modal.name_card }}</strong></h3>\n            </div>\n            <div class="input-field col s12 m2">\n                <input name="amount_want" id="amount_want" class="form-control" type="text" ng-model="search.card_modal.amount" />\n                <label for="amount_want">Amount</label>\n            </div>\n            <div class="input-field col s12 m4">\n                <input name="pp_want" id="pp_want" class="form-control" type="text" ng-model="search.card_modal.pp" />\n                <label for="pp_want">PokePoint</label>\n            </div>\n            <div class="input-field col s2">\n                <input name="foil_want" id="foil_want" class="form-control" type="checkbox" ng-model="search.card_modal.foil">\n                <label for="foil_want">Foil</label>\n            </div>\n            <div class="input-field col s2">\n                <input name="reverse_foil_want" id="reverse_foil_want" class="form-control" type="checkbox" ng-model="search.card_modal.reverse_foil" />\n                <label for="reverse_foil_want">Reverse Foil</label>\n            </div>\n            <div class="input-field col s2">\n                <input name="full_art_want" id="full_art_want" class="form-control" type="checkbox" ng-model="search.card_modal.full_art" />\n                <label for="full_art_want">Full Art</label>\n            </div>\n        </div>\n        <div class="modal-footer btn-group">\n            <button type="button" class="btn red white-text modal-close">Cancelar</button>\n            <button type="submit" class="btn blue white-text">Adicionar</button>\n        </div>\n    </form>\n</div>');
$templateCache.put('trade/trade.html','<div class="panel row no-margin-bottom">\n    <div class="col s12">\n        <h3>My Active Trades</h3>\n    </div>\n    <div class="col s12">\n        <h4 class="margin-top">This list includes you are receiving from others</h4>\n    </div>\n\n    <div class="input-field col s12">\n        <div class="switch">\n            <label>\n                <input type="checkbox" ng-model="trade.match" ng-change="trade.have(trade.match)">\n                <span class="lever"></span>\n                My Only\n            </label>\n        </div>\n    </div>\n    <poke-list url="api/card/trades" order="-updated_at" filter="trade._filter" per-page="10" class="col s12">\n        <list-header>\n            <div class="col s4">\n                <div class="col s2">\n                    #Trade\n                </div>\n                <div class="col s2">\n                    Set\n                </div>\n                <div class="col s8">\n                    Card\n                </div>\n            </div>\n            <div class="col s4">\n                <div class="col s2">\n                    PP\n                </div>\n                <div class="col s2">\n                    Status\n                </div>\n                <div class="col s4">\n                    Sender\n                </div>\n                <div class="col s4">\n                    Receiver\n                </div>\n            </div>\n            <div class="col s4">\n                <div class="col s5">\n                    Updated\n                </div>\n                <div class="col s5">\n                    Initiated\n                </div>\n            </div>\n        </list-header>\n        <item>\n            <div class="col s4">\n                <div class="col s2">\n                    #{{ item.id_want }}\n                </div>\n                <div class="col s2">\n                    {{ item.card.code_set }}\n                </div>\n                <div class="col s8 valign-wrapper">\n                    <img-load poke-src="item.card.image_url"></img-load>\n\n                    <span ng-show="item.status == \'sending\'" class="margin-lateral">\n                        <button class="btn waves-light waves-effect btn-small red" title="Report Problem"><i class="material-icons">warning</i></button>\n                    </span>\n\n                    <a class="valign wrap" ng-href="/details/{{ item.card.id_card }}" title="{{ item.card.name_card }}"> {{ item.card.name_card }}</a>\n                </div>\n            </div>\n            <div class="col s4">\n                <div class="col s2">\n                    {{ item.pp }}\n                </div>\n                <div class="col s2">\n                    {{ item.status }}\n                </div>\n                <div class="col s4" ng-show="item.user">\n                    <a ng-href="/user/{{ item.user_from.id_user }}">{{ item.user_from.login }}</a>\n                </div>\n                <div class="col s4" ng-show="item.user">\n                    <a ng-href="/user/{{ item.user.id_user }}">{{ item.user.login }}</a>\n                </div>\n            </div>\n            <div class="col s4">\n                <div class="col s5">\n                    {{ item.updated_at  }}\n                </div>\n                <div class="col s5">\n                    {{ item.created_at  }}\n                </div>\n                <div class="col s2">\n                    <div class="col s12" ng-show="trade.showButton(\'Complete\',item)" ng-class="trade.classButton(item)">\n                        <button ng-click="trade.complete(item)" class="btn waves-light waves-effect btn-small light-green " title="Complete Trade"><i class="material-icons">thumb_up</i></button>\n                    </div>\n                    <div class="col s12" ng-class="trade.classButton(item)">\n                        <a ng-href="trade/{{ item.id_want }}" class="btn waves-light waves-effect btn-small light-blue" title="Shipped card"><i class="material-icons">hourglass_empty</i></a>\n                    </div>\n                </div>\n            </div>\n        </item>\n    </poke-list>\n</div>\n\n\n<div id="ratings" class="modal">\n    <form ng-submit="trade.finishRating(trade.ratings)">\n        <div class="modal-content">\n            <div>\n                <h3>Rating this trade</h3>\n            </div>\n            <div ng-repeat="ratings in trade.ratings">\n                <div>\n                    <h4>{{ ratings.description }}</h4>\n                </div>\n                <ul class="list-inline">\n                    <li ng-repeat="rating in ratings.ratings" style="cursor: pointer;" ng-click="trade.selectRateing(ratings.ratings,rating)">\n                        <div ng-if="rating.value">\n                            <span>\n                                <i class="material-icons">{{ rating.check?"star":"star_border" }}</i>\n                            </span>\n                        </div>\n                        <div ng-if="!rating.value">\n                            {{ rating.description }}\n                        </div>\n                    </li>\n                </ul>  \n            </div>\n        </div>\n        <div class="modal-footer btn-group">\n            <button type="button" class="btn red white-text modal-close">Cancelar</button>\n            <button type="submit" class="btn blue white-text">Adicionar</button>\n        </div>\n    </form>\n</div>');
$templateCache.put('user/user.html','<div class="panel row no-margin-bottom">\n    <div class="col s12 m2 center-align">\n        <img class="user-img" src="/img/user-default.png" alt="default img">\n    </div>\n    <div class="col s8">\n        <h4>Login: <strong>{{ user.profile.login }}</strong></h4>\n        <p>Email: <strong>{{ user.profile.email }}</strong></p>\n        <p>Name: <strong>{{ user.profile.name }}</strong></p>\n        <p>PokePoint: <strong>{{ user.profile.pp }}</strong></p>\n    </div>\n    <div class="col s4 m2" ng-show="(user.profile && user.user)">\n        <button ng-if="user.user.id_user == user.profile.id_user" ng-click="user.show(\'edit\')" class="btn btn-small btn-block">Edit User</button>\n        <button ng-if="user.user.id_user == user.profile.id_user" ng-click="user.show(\'password\')" class="btn btn-small btn-block">Edit Password</button>\n        <button ng-if="user.user.id_user != user.profile.id_user" class="btn btn-small btn-block">Send Menssage</button>\n    </div>\n\n    <div class="col s12">\n        <ul class="tabs">\n            <li class="tab col s4"><a class="active" href="#tab1">Profile</a></li>\n            <!--<li class="tab col s4"><a href="#tab2">Cards</a></li>-->\n            <li class="tab col s4"><a href="#tab3">Trades</a></li>\n        </ul>\n    </div>\n\n    <div id="tab1" class="col s12 margin-top">\n        <div class="col s12 m8">\n            <div class="col s8 m4">\n                <label>Name</label>\n                <p>{{ user.profile.name }}</p>\n            </div>\n            <div class="col s4 m3">\n                <label>Login</label>\n                <p>{{ user.profile.login }}</p>\n            </div>\n            <div class="col s6 m3">\n                <label>Create At</label>\n                <p>{{ user.profile.created_at | custon_date }}</p>\n            </div>\n            <div class="col s6 m2">\n                <label>Total Trades</label>\n                <p>{{ user.profile.total_trade }}</p>\n            </div>\n            <div class="col s8 m4">\n                <label>Address</label>\n                <p>{{ user.profile.address }}</p>\n            </div>\n            <div class="col s4 m2">\n                <label>Number</label>\n                <p>{{ user.profile.number }}</p>\n            </div>\n            <div class="col s4 m3">\n                <label>District</label>\n                <p>{{ user.profile.district }}</p>\n            </div>\n            <div class="col s4 m3">\n                <label>City</label>\n                <p>{{ user.profile.city }}</p>\n            </div>\n            <div class="col s4 m2">\n                <label>State</label>\n                <p>{{ user.profile.state }}</p>\n            </div>\n            <div class="col s4 m2">\n                <label>Country</label>\n                <p>{{ user.profile.country }}</p>\n            </div>\n        </div>\n        <div class="col s12 m4 center-align">\n            <button class="btn btn-small">Envelop model</button>\n        </div>\n    </div>\n     <div id="tab3" class="col s12 margin-top">\n\n        <div class="col s12 m8">\n            <div ng-repeat="trade in user.trades">\n                <div class="col s10 m11">\n                    <p ng-bind-html="trade.text"></p>\n                </div>\n                <div class="col s2 m1">\n                    <a ng-href="trade/{{ item.id_want }}" class="btn btn-block waves-light waves-effect btn-small light-blue" title="Shipped card"><i class="material-icons">hourglass_empty</i></a>\n                </div>\n            </div>\n        </div>\n        <div class="col s12 m4">\n            <div class="col offset-s2 s8">\n                <ul class="collection with-header">\n                    <li class="collection-header center-align">Resume</li>\n                    <li class="collection-item center-align">Total Cards: {{ user.profile.cards.length }}</li>\n                    <li class="collection-item center-align">Total Trades: {{ user.profile.trades.length }} ({{ user.profile.pp_trades }} pp)</li>\n                    <li class="collection-item center-align">Total Wants: {{ user.profile.wants.length }} ({{ user.profile.pp_wants }} pp)</li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- <div id="edit" class="modal">\n    <div class="modal-content">\n        <div class="input-field col s12">\n            <h3>Edit: <strong>{{ user.edit.login }}</strong></h3>\n        </div>\n        <form class="col s12">\n            <div class="input-field col s6 m4">\n                <input name="login" id="login" ng-model="user.edit.login" disabled="disabled">\n                <label for="login" ng-class="{\'active\': user.edit.login}">Login</label>\n            </div>\n            <div class="input-field col s6 m4">\n                <input name="name" id="name" class="form-control" type="text" ng-model="user.edit.name">\n                <label for="name">Name</label>\n            </div>\n            <div class="input-field col s6 m4">\n                <input name="country" id="country" class="form-control" type="text" ng-model="user.edit.country">\n                <label for="country">Country</label>\n            </div>\n            <div class="input-field col s6 m4">\n                <input name="address" id="address" class="form-control" type="text" ng-model="user.edit.address">\n                <label for="address">Address</label>\n            </div>\n            <div class="input-field col s6 m4">\n                <input name="district" id="district" class="form-control" type="text" ng-model="user.edit.district">\n                <label for="district">District</label>\n            </div>\n            <div class="input-field col s6 m4">\n                <input name="city" id="city" class="form-control" type="text" ng-model="user.edit.city">\n                <label for="city">City</label>\n            </div>\n            <div class="input-field col s6 m4">\n                <input name=state" id="state" class="form-control" type="text" ng-model="user.edit.state">\n                <label for="state">State</label>\n            </div>\n\n            <div class="modal-footer btn-group">\n                <button type="button" class="btn red white-text modal-close">Cancelar</button>\n                <button type="submit" class="btn blue white-text">Adicionar</button>\n            </div>\n        </form>\n    </div>\n</div>\n -->\n<div id="edit" class="modal">\n    <form ng-submit="user.editProfile(user.edit)" class="row">\n        <div class="modal-content">\n            <div class="col s12">\n                <h3>Edit: <strong>{{ user.edit.login }}</strong></h3>\n            </div>\n            <div class="col s12">\n                <div class="input-field col s6 m4">\n                    <input name="login" id="login" disabled="disabled" placeholder="login" type="text" ng-model="user.edit.login" />\n                    <label for="login" ng-class="{\'active\':!!user.edit.login}">Login</label>\n                </div>\n                <div class="input-field col s6 m4">\n                    <input name="name" id="name" type="text" ng-model="user.edit.name" />\n                    <label for="name" ng-class="{\'active\':!!user.edit.name}">Name</label>\n                </div>\n                <div class="input-field col s6 m4">\n                    <input name="coutry" id="coutry" type="text" ng-model="user.edit.coutry" />\n                    <label for="coutry" ng-class="{\'active\':!!user.edit.country}">Country</label>\n                </div>\n            </div>\n            <div class="col s12">\n                <div class="input-field col s6 m6">\n                    <input name="name" id="name" type="text" ng-model="user.edit.address" />\n                    <label for="name" ng-class="{\'active\':!!user.edit.address}">Address</label>\n                </div>\n                <div class="input-field col s6 m3">\n                    <input name="number" id="number" type="text" ng-model="user.edit.number" />\n                    <label for="number" ng-class="{\'active\':!!user.edit.number}">Number</label>\n                </div>\n                <div class="input-field col s6 m3">\n                    <input name="complement" id="complement" type="text" ng-model="user.edit.complement" />\n                    <label for="complement" ng-class="{\'active\':!!user.edit.component}">Complement</label>\n                </div>\n            </div>\n            <div class="col s12">\n                <div class="input-field col s6 m4">\n                    <input name="district" id="district" type="text" ng-model="user.edit.district" />\n                    <label for="district" ng-class="{\'active\':!!user.edit.district}">District</label>\n                </div>\n                <div class="input-field col s6 m4">\n                    <input name="city" id="city" type="text" ng-model="user.edit.city" />\n                    <label for="city" ng-class="{\'active\':!!user.edit.city}">City</label>\n                </div>\n                <div class="input-field col s6 m4">\n                    <input name="state" id="state" type="text" ng-model="user.edit.state" />\n                    <label for="state" ng-class="{\'active\':!!user.edit.state}">State</label>\n                </div>\n            </div>\n        </div>\n        <div class="modal-footer btn-group col s12">\n            <div class="col s10 offset-s1 margin-top">\n                <button type="button" class="btn btn-small red white-text modal-close margin-lateral">Cancelar</button>\n                <button type="submit" class="btn btn-small blue white-text margin-lateral">Adicionar</button>\n            </div>\n        </div>\n    </form>\n</div>');
$templateCache.put('want/want.html','<div class="panel row no-margin-bottom">\n    <div class="col s12">\n        <h3>Wants</h3>\n    </div>\n    <div class="col s10">\n        <h4 class="margin-top">Add want card and see all wants</h4>\n    </div>\n\n    <div class="input-field col s12 m2 valign-wrapper">\n        <a href="/new-want" class="btn waves-light waves-effect btn-small btn-block valign">Add Want</a>\n    </div>\n\n    <div class="input-field col s12 m3">\n        <div class="switch">\n            <label>\n                <input type="checkbox" ng-model="want.match" ng-change="want.have(want.match)">\n                <span class="lever"></span>\n                My Only\n            </label>\n        </div>\n    </div>\n    <div class="input-field col s12 m6">\n        <input name="name" id="name" class="form-control" type="text" ng-model="want.filter.name" ng-model-options="{ debounce: 500 }" />\n        <label for="name">Card Name</label>\n    </div>\n\n    <div class="input-field col s12 m3">\n        <input name="number" id="number" class="form-control" type="text" ng-model="want.filter.number" ng-model-options="{ debounce: 500 }" />\n        <label for="number">Card Number</label>\n    </div>\n    <poke-list url="{{ want.url }}" filter="want.filter" per-page="10" class="col s12" hover="true">\n        <list-header>\n            <div class="col s3 m1">\n                <span>#Want</span>\n            </div>\n            <div class="col s1 hide-on-med-and-down">\n                <span>Set</span>\n            </div>\n            <div class="col s3 m3">\n                <span>Card</span>\n            </div>\n            <div class="col s3 m1">\n                <span>PP</span>\n            </div>\n            <div class="col s3 hide-on-med-and-down">\n                <span>User</span>\n            </div>\n            <div class="col s2 hide-on-med-and-down">\n                <span>Rarity</span>\n            </div>\n            <div class="col s3 m1">\n                <span></span>\n            </div>\n        </list-header>\n        <item>\n            <div class="col s3 m1">\n                <span>#{{ item.id_want }}</span>\n            </div>\n            <div class="col s1 hide-on-med-and-down">\n                <span>#{{ item.card.code_set }}</span>\n            </div>\n            <div class="col s3 m3">\n                <img-load poke-src="item.card.image_url" class="small-img"></img-load>\n                <span ng-show="(item.warning && item.my)" class="red-text"><i tooltip="This card not show for other player because you don`t have PokePoints" class="material-icons tooltipped icon-alert">warning</i></span>\n                <a ng-href="/details/{{ item.card.id_card }}" class="hide-on-med-and-down">{{ item.card.name_card }}</a>\n            </div>\n            <div class="col s3 m1">\n                <span>{{ item.pp }}</span>\n            </div>\n            <div class="col s3 hide-on-med-and-down">\n                <a ng-href="/user/{{ item.user.id_user }}">{{ item.user.login }}</a>\n            </div>\n            <div class="col s2 hide-on-med-and-down">\n                <span>{{ item.card.rarity }}</span>\n            </div>\n            <div class="col s3 m1">\n                <button ng-show="(!item.my && item.have)" ng-click="want.send(item)" class="btn waves-light waves-effect btn-small btn-block">Send</button>\n                <button ng-show="item.my" ng-click="want.send(item)" class="btn waves-light waves-effect btn-small btn-block red">Remove</button>\n                <!-- <span ng-show="(!item.my && !item.have)" class="red-text">Don\'t have</span> -->\n                <button ng-show="(!item.my && !item.have)" title="add card" ng-click="want.opemHave(item)" class="btn waves-light waves-effect btn-small btn-block light-green">ADD</button>\n            </div>\n        </item>\n    </poke-list>\n</div>\n\n<div id="have" class="modal">\n    <form ng-submit="want.addHave(want.card_modal)">\n        <div class="modal-content">\n            <div class="col s12">\n                <h3>Add <strong> {{ want.card_modal.name_card }}</strong></h3>\n            </div>\n            <div class="input-field col s12 m6">\n                <input name="amount" id="amount" class="form-control" type="text" ng-model="want.card_modal.amount" />\n                <label for="amount">Amount</label>\n            </div>\n            <div class="input-field col s2">\n                <input name="foil" id="foil" disabled="disabled" class="form-control" type="checkbox" ng-model="want.card_modal.foil" />\n                <label for="foil">Foil</label>\n            </div>\n            <div class="input-field col s2">\n                <input name="reverse_foil" id="reverse_foil" disabled="disabled" class="form-control" type="checkbox" ng-model="want.card_modal.reverse_foil" />\n                <label for="reverse_foil">Reverse Foil</label>\n            </div>\n            <div class="input-field col s2">\n                <input name="full_art" id="full_art" disabled="disabled" class="form-control" type="checkbox" ng-model="want.card_modal.full_art" />\n                <label for="full_art">Full Art</label>\n            </div>\n        </div>\n        <div class="modal-footer btn-group">\n            <button type="button" class="btn red white-text modal-close">Cancelar</button>\n            <button type="submit" class="btn blue white-text">Adicionar</button>\n        </div>\n    </form>\n</div>');
$templateCache.put('add-have/add-have.html','<div id="have" class="modal">\n\t<form ng-submit="search.have(search.card_modal)">\n   \t<div class="modal-content">\n       \t<div class="col s12">\n           \t<h3>Add <strong> {{ search.card_modal.name_card }}</strong></h3>\n       \t\t<div class="input-field col s12 m6">\n           \t\t<input name="amount" id="amount" class="form-control" type="text" ng-model="search.card_modal.amount">\n        \t\t</div>\n            \t<label for="amount">Amount</label>\n\t\t\t</div>\n       \t<div class="input-field col s2">\n       \t\t<input name="foil" id="foil" class="form-control" type="checkbox" ng-model="search.card_modal.foil">\n           \t<label for="foil">Foil</label>\n       \t</div>\n       \t<div class="input-field col s2">\n       \t\t<label for="reverse_foil">Reverse Foil</label>\n           \t<input name="reverse_foil" id="reverse_foil" class="form-control" type="checkbox" ng-model="search.card_modal.reverse_foil">\n        \t</div>\n        \t<div class="input-field col s2">\n        \t\t<input name="full_art" id="full_art" class="form-control" type="checkbox" ng-model="search.card_modal.full_art">\n           \t<label for="full_art">Full Art</label>\n       \t</div>\n\t\t</div>\n    \t<div class="modal-footer btn-group">\n       \t<button type="button" class="btn red white-text modal-close">Cancelar</button>\n       \t<button type="submit" class="btn blue white-text">Adicionar</button>\n    \t</div>\n\t</form>\n</div>');
$templateCache.put('ratings/ratings.html','<div id="ratings" class="modal">\n\t<form ng-submit="search.have(search.card_modal)">\n   \t<div class="modal-content">\n       \t<div class="col s12">\n           \t<h3>Add <strong> {{ search.card_modal.name_card }}</strong></h3>\n       \t\t<div class="input-field col s12 m6">\n           \t\t<input name="amount" id="amount" class="form-control" type="text" ng-model="search.card_modal.amount">\n        \t\t</div>\n            \t<label for="amount">Amount</label>\n\t\t\t</div>\n       \t<div class="input-field col s2">\n       \t\t<input name="foil" id="foil" class="form-control" type="checkbox" ng-model="search.card_modal.foil">\n           \t<label for="foil">Foil</label>\n       \t</div>\n       \t<div class="input-field col s2">\n       \t\t<label for="reverse_foil">Reverse Foil</label>\n           \t<input name="reverse_foil" id="reverse_foil" class="form-control" type="checkbox" ng-model="search.card_modal.reverse_foil">\n        \t</div>\n        \t<div class="input-field col s2">\n        \t\t<input name="full_art" id="full_art" class="form-control" type="checkbox" ng-model="search.card_modal.full_art">\n           \t<label for="full_art">Full Art</label>\n       \t</div>\n\t\t</div>\n    \t<div class="modal-footer btn-group">\n       \t<button type="button" class="btn red white-text modal-close">Cancelar</button>\n       \t<button type="submit" class="btn blue white-text">Adicionar</button>\n    \t</div>\n\t</form>\n</div>');}]);