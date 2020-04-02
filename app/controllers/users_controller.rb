class UsersController < ApplicationController
  
  def index
    return nil if params[:keyword] == ""
    @users = User.where(['name LIKE ?', "%#{params[:keyword]}%"] ).where.not(id: current_user.id).limit(10)
    respond_to do |format|
      format.html
      format.json
    end
  end

  def edit
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end
end



if @message.save
  # メッセージの保存に成功した場合
  redirect_to :index, notice: 'メッセージの送信に成功しました'
else
  # メッセージの保存に失敗した場合
  flash.now[:error] = 'メッセージの送信に失敗しました'
  render :index
end