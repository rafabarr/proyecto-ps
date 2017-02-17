/*
    [00]
    
    Plantillas de cadena de texto (template literals) [``]
    http://stackoverflow.com/questions/805107/creating-multiline-strings-in-javascript?answertab=active#tab-top
*/

/*
    [01]
*/

var htmlLogin = 
    `
    <!-- Inicio de sesión -->
    <div id="formLogin">
        <!-- Cabecera -->
        <div class="jumbotron text-center">
            <h2><abbr title="Sistema Exit poll (Encuesta a boca de urna)">SEP</abbr> v1.0</h2>
            <p>Elecciones 2017 Ecuador</p>
        </div>
        <!-- Maquetación formulario -->
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-1 col-sm-4"></div>
                <!-- Formulario -->
                <div class="col-xs-10 col-sm-4">
                    <h4>Inicio de sesión</h4>

                    <!--    ¿Diferencia entre action, actionlistener, onClick?
                            http://stackoverflow.com/questions/21438721/jsf-difference-between-action-actionlistener-onclick?answertab=active#tab-top -->

                    <form action="javascript:login()" method="post" name="frmLogin">
                        <!-- Usuario -->
                        <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                            <input type="text" class="form-control" name="formInputUser" placeholder="Usuario" required>
                        </div><br>
                        <!-- Contraseña -->
                        <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                            <input type="password" class="form-control" name="formInputPassword" placeholder="Contraseña" required>
                        </div><br>
                        <!-- Entrar -->
                        <div class="form-group">
                            <button type="submit" class="btn btn-default" name="formInputSubmit">Entrar</button>
                        </div>
                    </form>
                </div>
                <div class="col-xs-1 col-sm-4"></div>
            </div>
        </div>
    </div>
    `;

/*
    [02]
*/

var htmlFormularioEncuesta = 
    `
    <!-- Registro de voto -->
    <div id="formRegistroVoto" class="container-fluid">
        
        <!-- Cabecera -->
        <h4><abbr title="Sistema Exit poll (Encuesta a boca de urna)">SEP</abbr> v1.0</h4>
        <p>Elecciones 2017 Ecuador</p>
        <a href="#" onclick="logout();">Cerrar sesión</a><br><br><br>
        
        <!-- Maquetación formulario -->
        <div class="row">
            
            <!-- Formulario -->
            <div class="col-xs-12 col-sm-12">
                <h4>Registro de voto</h4>
                <form action="javascript:registrarVoto()" method="post" name="frmRegistroVoto">
                    
                    <!-- Votante -->
                    <div class="row">
                        <div class="col-xs-9 col-sm-4">
                            <!--<div class="panel-group"></div>-->
                            <div class="panel panel-primary">
                                <div class="panel-heading">Información personal</div>
                                <div class="panel-body">
                                    <!-- http://www.w3schools.com/tags/att_input_pattern.asp -->
                                    <input pattern="[0-9]{10,10}" type="text" class="form-control" name="formInputCedula" maxlength="10" placeholder="Cédula" required>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-3 col-sm-8"></div>
                    </div>
                    
                    <!-- Encuesta -->
                    <div class="row">
                        <div class="col-xs-12 col-sm-12">
                            
                            <!-- Pills -->
                            <ul id="dynamicPillsPoll" class="nav nav-pills nav-justified">
                                <!-- Inserción de datos -->
                            </ul>
                            
                            <!-- Contenido pills -->
                            <div id="pillsPollContent" class="tab-content">
                                <!-- Inserción de datos -->
                            </div>
                        </div>
                    </div>
                    
                    <!-- Guardar -->
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary" name="formInputSubmit">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    `;

/*
    [03]
*/

var htmlDashboard = 
    `
    <!-- Administración del sistema -->
    <div id="adminDashBoard" class="container-fluid">
        
        <!-- Cabecera -->
        <h4><abbr title="Sistema Exit poll (Encuesta a boca de urna)">SEP</abbr> v1.0</h4>
        <p>Elecciones 2017 Ecuador</p>
        <a href="#" onclick="logout();">Cerrar sesión</a><br><br><br>
        
        <!-- Maquetación administración -->
        <div class="row">
            
            <!-- Dashboard -->
            <div class="col-xs-12 col-sm-12">
                <!-- Pills -->
                <ul id="dynamicPillsAdmin" class="nav nav-pills nav-justified">
                    <!-- Inserción de datos -->
                </ul>

                <!-- Contenido pills -->
                <div id="pillsAdminContent" class="tab-content">
                    <!-- Inserción de datos -->
                </div>
            </div>
        </div>
    </div>
    `;

/*
    [04]
*/

var htmlModificarVoto = 
    `
    <div id="formModificarVoto" class="container-fluid">
        <!-- Inserción de datos -->
        <div class="row">
            <div class="col-xs-1 col-sm-4"></div>
            <div class="col-xs-10 col-sm-4">
                <form id="modificarVoto">
                    <div class="form-group">
                        <!-- http://stackoverflow.com/questions/5805059/how-do-i-make-a-placeholder-for-a-select-box?answertab=votes#tab-top -->
                        <label for="selectTag">Seleccione la nueva opción:</label>
                        <select id="selectTag" class="form-control">
                            <option value="" disabled selected></option>
                            <!-- Inserción de datos -->
                        </select>
                    </div>
                </form>                
                <div style="text-align: center;">
                    <button class="btn btn-warning" name="btnModificarVoto" onclick="modificarVoto(true)">Modificar</button>
                    <button class="btn btn-primary" name="btnCancelar" onclick="modificarVoto(false)">Cancelar</button>
                </div>
            </div>
            <div class="col-xs-1 col-sm-4"></div>
        </div>
    </div><br><br>
    `;