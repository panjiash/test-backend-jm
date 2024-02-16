FROM ubuntu:latest

ENV MYSQL_ROOT_PASSWORD=panji123

ENV MYSQL_DATA_DIR=/var/lib/mysql \
    MYSQL_RUN_DIR=/run/mysqld \
    MYSQL_LOG_DIR=/var/log/mysql

RUN apt-get update \
    && apt-get install -y wget git vim mariadb-server net-tools sudo curl

WORKDIR /opt

RUN curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
RUN apt install -y nodejs

RUN /etc/init.d/mariadb start \
    && mysql -u root -e "GRANT ALL PRIVILEGES on . to 'root'@'localhost' IDENTIFIED BY 'panji123';FLUSH PRIVILEGES;create database data_kepegawaian;"

RUN git clone https://github.com/panjiash/test-backend-jm.git
RUN cd test-backend-jm/PROJECT_FOLDER \
    && npm install

RUN chmod 777 /opt/test-backend-jm/run.sh \
    && mv /opt/test-backend-jm/run.sh /opt

EXPOSE 5003

ENTRYPOINT ["/bin/bash", "-c", "./run.sh"]