class V1::MessagesController < ApplicationController
  def index
    render json: { messages: Message.all }
  end

  def create
    message = Message.new(message_params)
    if message.save
      head :ok
    else
      head :unprocessable_entity
    end
  end

  def update
    message = Message.find(params[:id])
    if message.update(message_params)
      head :ok
    else
      head :unprocessable_entity
    end
  end

  def destroy
    message = Message.find(params[:id]).destroy
    head :ok
  end

  private
  def message_params
    params.require(:message).permit(:body, :slack_team_name, :slack_channel_name)
  end
end
